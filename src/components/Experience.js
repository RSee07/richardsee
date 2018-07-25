import React, { Fragment } from 'react'
import styled from 'styled-components'
import Job from './Job'

const Experience = (props) => (
    <div>
        <h3>{props.coreSkills}</h3>
        {props.careerHistory.map(job => {
            // Object destructuring
            const {title, company, work} = job
            return <Job key={title} title={title} company={company} work={work} />
        })}
    </div>
)

export default Experience