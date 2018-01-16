import * as React from "react";
import { Talk } from "./talk";

export const Timeslot = ({
    start,
    end,
    talks,
    addToSchedule,
    removeFromSchedule,
    mySchedule
}) => (
    <React.Fragment>
        <div>
            {start} - {end}
        </div>
        {talks.map(talk => (
            <Talk
                talk={talk}
                addToSchedule={() => addToSchedule(talk)}
                removeFromSchedule={() =>
                    removeFromSchedule(talk)
                }
                isInSchedule={
                    mySchedule.indexOf(talk) !== -1
                }
            />
        ))}
    </React.Fragment>
);
