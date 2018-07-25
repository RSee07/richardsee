import React, { Fragment } from 'react'
import Job from './Job'
import * as Heading from './Heading'

const Experience = (props) => (
    <Fragment>
        <Heading.H1>Work</Heading.H1>
        {/* <h3>{props.coreSkills}</h3> */}
        <Heading.H2>Career History</Heading.H2>
        {props.careerHistory.map(job => {
            // Object destructuring
            const {title, company, work} = job
            return <Job key={title} title={title} company={company} work={work} />
        })}
    </Fragment>
)

export default Experience