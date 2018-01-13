import * as React from 'react'
import { talkShape } from './fetch-agenda'

export const Talk = ({ talk }) => <div>{talk.title}</div>

Talk.propTypes = {
    talk: talkShape.isRequired
}
