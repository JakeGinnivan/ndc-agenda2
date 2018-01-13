import * as React from 'react'
import * as PropTypes from 'prop-types'
import { talkShape } from './agenda'
import { formatTime, groupBy } from './App'
import { Timeslot } from './timeslot'

export const Day = ({ day, talks }) => (
    <React.Fragment>
        {groupBy(
            talks,
            talk => ({
                start: formatTime(talk.startTime),
                end: formatTime(talk.endTime)
            }),
            val => `${val.start}${val.end}`
        ).map(timeSlot => (
            <Timeslot
                start={timeSlot.key.start}
                end={timeSlot.key.end}
                talks={timeSlot.values}
            />
        ))}
    </React.Fragment>
)

Day.propTypes = {
    day: PropTypes.number.isRequired,
    talks: PropTypes.arrayOf(talkShape)
}
