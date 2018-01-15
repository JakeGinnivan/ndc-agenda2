import * as React from "react";
import { talkShape } from "../fetch-agenda";

export const Talk = ({ talk }) => (
    <div>
        {talk.title} - {talk.speaker}
    </div>
);
Talk.propTypes = {
    talk: talkShape
};
