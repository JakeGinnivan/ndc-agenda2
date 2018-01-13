import React, { Component } from 'react'
import './App.css'
import { fetchAgenda } from './agenda'
import { setInterval } from 'timers'
import { Day } from './day'

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
                    <Day day={key} talks={talks} />
                ))}
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
