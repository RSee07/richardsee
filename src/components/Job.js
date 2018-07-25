import React from 'react'
import styled from 'styled-components'
import Work from './Work'

const Job = (props) => (
    <div>
        <div>{props.title}</div>
        <div>{props.company}</div>
        {props.work.map(work => {
            // Object destructuring
            const {title, date, description} = work
            return <Work key={title} title={title} date={date} description={description} />
        })}
    </div>
)

export default Job