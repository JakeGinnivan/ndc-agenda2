import * as React from "react";
import { fetchAgenda } from "../fetch-agenda";
import { groupBy } from "../utils";
import { Day } from "../components/day";
import { Tabs } from "../components/tabs";

export class Agenda extends React.Component {
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
            <Tabs
                selectedTab={this.props.match.params.day}
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
        );
    }
}
