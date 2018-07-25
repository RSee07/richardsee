import React from 'react'
import styled from 'styled-components'
import * as Text from './Text'

const Wrapper = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    background-color: #323232;
    box-shadow: 1px 6px 10px #000000;
`

const Work = (props) => (
    <Wrapper>
        <Text.H4>{props.title}</Text.H4>
        <div>{props.date}</div>
        {props.description.map((point, i) => {
            return <div key={i} >{point}</div>
        })}
    </Wrapper>
)

export default Work