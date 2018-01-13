import * as React from 'react'
import { Tabs } from './tabs'
import { Day } from './day'

const dayLookup = {
    1: 'Wednesday',
    2: 'Thursday',
    3: 'Friday'
}

export const Agenda = ({ days }) => (
    <Tabs
        tabs={days.map(day => ({
            header: dayLookup[day.key],
            data: day
        }))}
        renderData={data => <Day day={data.key} talks={data.values} />}
    />
)
