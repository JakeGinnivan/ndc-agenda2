import React, { Component } from "react";
import "./App.css";
import { fetchAgenda } from "./fetch-agenda";
import { groupBy } from "./utils";
import { Day } from "./components/day";
import { Tabs } from "./components/tabs";

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
                <Tabs
                    tabs={days.map(day => ({
                        header: `Day ${day.key}`,
                        data: day
                    }))}
                    renderTab={data => (
                        <Day
                            day={data.key}
                            talks={data.values}
                        />
                    )}
                />
            </div>
        );
    }
}

export default App;
