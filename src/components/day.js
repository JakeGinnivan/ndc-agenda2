import * as React from "react";
import { groupBy, formatTime } from "../utils";
import { Timeslot } from "./timeslot";

export const Day = ({
    day,
    talks,
    addToSchedule,
    removeFromSchedule,
    mySchedule
}) => {
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
            {timeslots.map(timeslot => (
                <Timeslot
                    {...timeslot}
                    start={timeslot.start}
                    end={timeslot.end}
                    talks={timeslot.talks}
                    addToSchedule={addToSchedule}
                    removeFromSchedule={removeFromSchedule}
                    mySchedule={mySchedule}
                />
            ))}
        </React.Fragment>
    );
};
