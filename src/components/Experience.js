import React, { Fragment } from 'react'
import Job from './Job'
import * as Text from './Text'

const Experience = (props) => (
    <Fragment>
        <Text.H1>Work</Text.H1>
        {/* <h3>{props.coreSkills}</h3> */}
        <Text.H2>Career History</Text.H2>
        {props.careerHistory.map(job => {
            // Object destructuring
            const {title, company, work} = job
            return <Job key={title} title={title} company={company} work={work} />
        })}
    </Fragment>
)

export default Experience