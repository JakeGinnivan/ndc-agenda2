import React, { Component } from "react";
import "./App.css";
import { fetchAgenda } from "./fetch-agenda";
import { groupBy } from "./utils";
import { Day } from "./components/day";

class App extends Component {
    state = {
        talks: []
    };

    async componentWillMount() {
        const talks = await fetchAgenda();
        this.setState({ talks });
    }

    render() {
        const days = groupBy(
            this.state.talks,
            talk => talk.day
        );

        return (
            <div className="App">
                {days.map(day => {
                    const { key, values: talks } = day;
                    return <Day day={key} talks={talks} />;
                })}
            </div>
        );
    }
}

export default App;
