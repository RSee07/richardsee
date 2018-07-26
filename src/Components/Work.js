import React from 'react'
import styled from 'styled-components'
import * as Text from './Text'

const Wrapper = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: #424242;
    box-shadow: 1px 6px 10px #000000;
`

const List = styled.ul`
    margin: 0;
    padding-left: 20px;
`

const Point = styled.li`
    list-style-type: square;
    padding-top: 20px;
    color: #ffffff;
    font-size: 16px;
    margin: 0;
`

const Work = ({ title, date, description }) => (
    <Wrapper>
        <Text.H4>{title}</Text.H4>
        <Text.Date>{date}</Text.Date>
        <List>{description.map((point, i) => <Point key={i} >{point}</Point> )}</List>
    </Wrapper>
)

export default Work