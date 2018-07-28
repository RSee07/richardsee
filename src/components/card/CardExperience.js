import React from 'react'
import styled from 'styled-components'
import CardBase from './CardBase'
import * as Text from '../Text'

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

const CardExperience = ({ title, date, description }) => (
    <CardBase>
        <Text.H4>{title}</Text.H4>
        <Text.Date>{date}</Text.Date>
        <List>{description.map((point, i) => <Point key={i} >{point}</Point> )}</List>
    </CardBase>
)

export default CardExperience