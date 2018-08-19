import React from 'react'
import styled from 'styled-components'
import CardExperience from '../card/CardExperience'
import * as Text from '../Text'

const Wrapper = styled.div`
    @media (min-width: 900px) {
        width: 100%;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`

const TextWrapper = styled.div`
    width: 100%;

    @media (min-width: 900px) {
        width: 40%;
        position: sticky;
        top: 100px;
    }
`

const CardWrapper = styled.div`
    width: 100%;

    @media (min-width: 900px) {
        width: 55%;
    }
`

const Job = ({ title, company, work }) => (
    <Wrapper>
        <TextWrapper>
            <Text.H3>{title} | {company}</Text.H3>
        </TextWrapper>
        <CardWrapper>
            {work.map(({title, date, description}) => <CardExperience key={title} title={title} date={date} description={description} />)}
        </CardWrapper>
    </Wrapper>
)

export default Job