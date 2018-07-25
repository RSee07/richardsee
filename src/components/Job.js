import React from 'react'
import Work from './Work'
import * as Text from './Text'

const Job = (props) => (
    <div>
        <Text.H3>{props.title} | {props.company}</Text.H3>
        {props.work.map(work => {
            // Object destructuring
            const {title, date, description} = work
            return <Work key={title} title={title} date={date} description={description} />
        })}
    </div>
)

export default Job