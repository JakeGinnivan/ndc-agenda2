import * as React from "react";
import { Talk } from "./talk";

export const Timeslot = ({ start, end, talks }) => (
    <React.Fragment>
        <div>
            {start} - {end}
        </div>
        {talks.map(talk => <Talk talk={talk} />)}
    </React.Fragment>
);
