import React from 'react'
import Card from './Card'
import * as Text from './Text'

const Job = ({ title, company, work }) => (
    <div>
        <Text.H3>{title} | {company}</Text.H3>
        {work.map(({title, date, description}) => <Card key={title} title={title} date={date} description={description} />)}
    </div>
)

export default Job