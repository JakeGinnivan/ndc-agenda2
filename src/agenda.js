import * as React from 'react'
import { Tabs } from './tabs'
import { Day } from './day'
import { fetchAgenda } from './fetch-agenda'
import { groupBy } from './App'

const dayLookup = {
    1: 'Wednesday',
    2: 'Thursday',
    3: 'Friday'
}

export class Agenda extends React.Component {
    state = { talks: [] }

    componentWillMount() {
        fetchAgenda().then(value => this.setState({ talks: value }))
    }

    render() {
        const days = groupBy(this.state.talks, talk => talk.day)

        return (
            <Tabs
                tabs={days.map(day => ({
                    header: dayLookup[day.key],
                    data: day
                }))}
                renderData={data => <Day day={data.key} talks={data.values} />}
            />
        )
    }
}
