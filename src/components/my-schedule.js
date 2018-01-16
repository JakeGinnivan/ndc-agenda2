import * as React from "react";
import { connect } from "react-redux";

export const MySchedule = connect(state => ({
    mySchedule: state.schedule.mySchedule
}))(({ mySchedule }) => (
    <ul>{mySchedule.map(talk => <li>{talk.title}</li>)}</ul>
));
