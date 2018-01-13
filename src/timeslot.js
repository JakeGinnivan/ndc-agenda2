import * as React from 'react'
import * as propTypes from 'prop-types'
import { timeShape, talkShape } from './agenda'
import { Talk } from './talk'

export const Timeslot = ({ start, end, talks }) => (
    <React.Fragment>
        <div>
            {start} - {end}
        </div>
        {talks.map(talk => <Talk talk={talk} />)}
    </React.Fragment>
)

Timeslot.propTypes = {
    start: timeShape,
    finish: timeShape,
    talks: propTypes.arrayOf(talkShape)
}
