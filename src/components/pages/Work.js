import React, { Fragment } from 'react'
import Title, { AfterTitleWrapper } from '../Title'
import Job from './Job'
import * as Text from '../Text'

const Work = ({ coreSkills, careerHistory }) => (
    <Fragment>
        <Title>Work</Title>
        <AfterTitleWrapper>
            {/* <h3>{coreSkills}</h3> */}
            <Text.H2>Career History</Text.H2>
            {careerHistory.map(({title, company, work}) => <Job key={title} title={title} company={company} work={work} />)}
        </AfterTitleWrapper>
    </Fragment>
)

export default Work