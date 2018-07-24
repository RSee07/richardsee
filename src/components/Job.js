import React from 'react'
import styled from 'styled-components'
import Work from './Work'

const Job = (props) => (
    <div>
        <div>{props.title}</div>
        <div>{props.company}</div>
        {props.work.map(work => {
            return <Work key={work.title} title={work.title} date={work.date} description={work.description} />
        })}
    </div>
)

export default Job