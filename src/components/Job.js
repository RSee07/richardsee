import React from 'react'
import Work from './Work'
import * as Text from './Text'

const Job = ({ title, company, work }) => (
    <div>
        <Text.H3>{title} | {company}</Text.H3>
        {work.map(({title, date, description}) => <Work key={title} title={title} date={date} description={description} />)}
    </div>
)

export default Job