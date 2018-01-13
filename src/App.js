import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchAgenda } from './agenda'
import { setInterval } from 'timers'

class App extends Component {
    state = { talks: [] }

    componentWillMount() {
        fetchAgenda().then(value => this.setState({ talks: value }))
    }

    render() {
        const days = groupBy(this.state.talks, talk => talk.day)

        return (
            <div className="App">
                {days.map(({ key, values: talks }) => (
                    <React.Fragment>
                        <h1>Day {key}</h1>
                        {groupBy(talks, talk => formatTime(talk.startTime)).map(
                            timeSlot => (
                                <React.Fragment>
                                    <div>{timeSlot.key}</div>
                                    {timeSlot.values.map(talk => (
                                        <div>{talk.title}</div>
                                    ))}
                                </React.Fragment>
                            )
                        )}
                    </React.Fragment>
                ))}
            </div>
        )
    }
}

function formatTime(time) {
    const minutes = time.minutes.toString()
    const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes
    return `${time.hour}:${formattedMinutes}`
}

function groupBy(items, selector) {
    const lookup = {}
    return items.reduce((acc, val) => {
        const key = selector(val)

        if (lookup[key]) {
            lookup[key].push(val)
        } else {
            lookup[key] = [val]
            acc.push({ key, values: lookup[key] })
        }

        return acc
    }, [])
}

export default App
