import * as React from 'react'
import * as propTypes from 'prop-types'
import { talkShape } from './agenda'

export const Talk = ({ talk }) => <div>{talk.title}</div>

Talk.propTypes = {
    talk: talkShape.isRequired
}
