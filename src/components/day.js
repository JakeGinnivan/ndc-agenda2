import * as React from "react";
import { groupBy, formatTime } from "../utils";
import { Timeslot } from "./timeslot";

export const Day = ({ day, talks }) => {
    const timeslots = groupBy(
        talks,
        talk => ({
            start: formatTime(talk.startTime),
            end: formatTime(talk.endTime)
        }),
        val => `${val.start}${val.end}`
    ).map(timeslot => ({
        start: timeslot.key.start,
        end: timeslot.key.end,
        talks: timeslot.values
    }));
    return (
        <React.Fragment>
            <h1>Day {day}</h1>
            {timeslots.map(timeslot => (
                <Timeslot
                    {...timeslot}
                    start={timeslot.start}
                    end={timeslot.end}
                    talks={timeslot.talks}
                />
            ))}
        </React.Fragment>
    );
};
