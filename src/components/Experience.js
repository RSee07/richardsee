import React, { Fragment } from 'react'
import styled from 'styled-components'
import Job from './Job'

const Experience = (props) => (
    <div>
        <h3>{props.coreSkills}</h3>
        {props.careerHistory.map(job => {
            return <Job key={job.title} title={job.title} company={job.company} work={job.work} />
        })}
    </div>
)

export default Experience