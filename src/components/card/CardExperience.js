import React from 'react'
import styled from 'styled-components'
import { Card } from './CardBase'
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
    <Card>
        <Text.H4>{title}</Text.H4>
        <Text.Date>{date}</Text.Date>
        <List>{description.map((point, i) => <Point key={i} >{point}</Point> )}</List>
    </Card>
)

export default CardExperience