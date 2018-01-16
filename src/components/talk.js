import * as React from "react";
import { talkShape } from "../fetch-agenda";
import { connect } from "react-redux";
import { addToSchedule } from "../schedule.redux";

const scheduleHigherOrderComponent = connect(
    (state, ownProps) => ({
        mySchedule: state.schedule.mySchedule,
        isInSchedule:
            state.schedule.mySchedule.indexOf(
                ownProps.talk
            ) !== -1
    })
);

export const Talk = scheduleHigherOrderComponent(
    ({ talk, mySchedule, dispatch, isInSchedule }) => (
        <div>
            {talk.title} - {talk.speaker}
            <a
                onClick={() => {
                    if (!isInSchedule) {
                        dispatch(addToSchedule(talk));
                    }
                }}
            >
                {isInSchedule ? "Remove" : "Add"}
            </a>
        </div>
    )
);
Talk.propTypes = {
    talk: talkShape
};
