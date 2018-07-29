import styled from 'styled-components'
import { color } from './Helper'

export const H1 = styled.h1`
    color: ${color.orange};
    font-size: 40px;
    text-shadow: 4px 4px 10px #000000;
`

export const H2 = H1.withComponent('h2').extend`
    font-size: 32px;
`

export const H3 = H1.withComponent('h3').extend`
    font-size: 22px;
`

export const H4 = H1.withComponent('h4').extend`
    font-size: 18px;
    text-shadow: none;
    margin: 0;
`

export const P = styled.p`
    color: ${color.white};
    font-size: 16px;
    margin: 0;
`

export const Date = P.extend`
    color: ${color.orange};
`