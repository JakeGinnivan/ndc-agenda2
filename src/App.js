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
        return (
            <div className="App">
                {this.state.talks.map(talk => <div>{talk.title}</div>)}
            </div>
        )
    }
}

export default App
