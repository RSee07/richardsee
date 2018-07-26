import React, { Fragment } from 'react'
import Job from './Job'
import * as Text from './Text'

const Experience = ({ coreSkills, careerHistory }) => (
    <Fragment>
        <Text.H1>Work</Text.H1>
        {/* <h3>{coreSkills}</h3> */}
        <Text.H2>Career History</Text.H2>
        {careerHistory.map(({title, company, work}) => <Job key={title} title={title} company={company} work={work} />)}
    </Fragment>
)

export default Experience