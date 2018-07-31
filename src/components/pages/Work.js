import React, { Fragment } from 'react'
import PageBase from './PageBase'
import Job from './Job'
import * as Text from '../Text'

const Work = ({ coreSkills, careerHistory }) => (
    <PageBase title='Work'>
        {/* <h3>{coreSkills}</h3> */}
        <Text.H2>Career History</Text.H2>
        {careerHistory.map(({title, company, work}) => <Job key={title} title={title} company={company} work={work} />)}
    </PageBase>
)

export default Work