import React, { Component } from 'react'
import './App.css'
import { fetchAgenda } from './agenda'
import { Day } from './day'
import { Tabs } from './tabs'

const dayLookup = {
    1: 'Wednesday',
    2: 'Thursday',
    3: 'Friday'
}

class App extends Component {
    state = { talks: [] }

    componentWillMount() {
        fetchAgenda().then(value => this.setState({ talks: value }))
    }

    render() {
        const days = groupBy(this.state.talks, talk => talk.day)

        return (
            <div className="App">
                <Tabs
                    tabs={days.map(day => ({
                        header: dayLookup[day.key],
                        data: day
                    }))}
                    renderData={data => (
                        <Day day={data.key} talks={data.values} />
                    )}
                />
            </div>
        )
    }
}

export function formatTime(time) {
    const minutes = time.minutes.toString()
    const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes
    return `${time.hour}:${formattedMinutes}`
}

/**
 *
 * @param {array} items
 * @param {*} selector
 * @param {*} toString optionally formats the selector result as a string
 * this is used to work out if the selector value is the same
 */
export function groupBy(items, selector, toString = val => val.toString()) {
    const lookup = {}
    return items.reduce((acc, val) => {
        const selectorValue = selector(val)
        const key = toString(selectorValue)

        if (lookup[key]) {
            lookup[key].push(val)
        } else {
            lookup[key] = [val]
            acc.push({ key: selectorValue, values: lookup[key] })
        }

        return acc
    }, [])
}

export default App
