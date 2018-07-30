import React from 'react'
import styled from 'styled-components'
import CardBase from './CardBase'
import * as Text from '../Text'
import { color } from '../Helper'

const List = styled.ul`
    margin: 0;
    padding-left: 20px;
`

const Point = styled.li`
    list-style-type: square;
    padding-top: 20px;
    color: ${color.white};
`

const CardExperience = ({ title, date, description }) => (
    <CardBase title={title} date={date}>
        <List>{description.map((point, i) => <Point key={i} ><Text.P>{point}</Text.P></Point> )}</List>
    </CardBase>
)

export default CardExperience