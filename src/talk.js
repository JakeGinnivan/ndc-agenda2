import * as React from 'react'
import { talkShape } from './agenda'

export const Talk = ({ talk }) => <div>{talk.title}</div>

Talk.propTypes = {
    talk: talkShape.isRequired
}
