import * as React from 'react'
import * as PropTypes from 'prop-types'
import { talkShape } from './agenda'
import { formatTime, groupBy } from './App'

export const Day = ({ day, talks }) => (
    <React.Fragment>
        <h1>Day {day}</h1>
        {groupBy(talks, talk => formatTime(talk.startTime)).map(timeSlot => (
            <React.Fragment>
                <div>{timeSlot.key}</div>
                {timeSlot.values.map(talk => <div>{talk.title}</div>)}
            </React.Fragment>
        ))}
    </React.Fragment>
)

Day.propTypes = {
    day: PropTypes.number.isRequired,
    talks: PropTypes.arrayOf(talkShape)
}
