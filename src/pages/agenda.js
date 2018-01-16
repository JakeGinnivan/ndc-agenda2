import * as React from "react";
import { fetchAgenda } from "../fetch-agenda";
import { groupBy } from "../utils";
import { Day } from "../components/day";
import { Tabs } from "../components/tabs";
import { MySchedule } from "../components/my-schedule";

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
            <React.Fragment>
                <MySchedule />
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
            </React.Fragment>
        );
    }
}
