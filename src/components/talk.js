import * as React from "react";
import { talkShape } from "../fetch-agenda";

export const Talk = ({
    talk,
    isInSchedule,
    addToSchedule,
    removeFromSchedule
}) => (
    <div>
        {talk.title} - {talk.speaker}
        <a
            onClick={() => {
                if (isInSchedule) {
                    removeFromSchedule();
                } else {
                    addToSchedule();
                }
            }}
        >
            {isInSchedule ? "Remove" : "Add"}
        </a>
    </div>
);
Talk.propTypes = {
    talk: talkShape
};
