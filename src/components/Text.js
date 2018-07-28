import styled from 'styled-components'
import { color } from './Helper'

export const H1 = styled.h1`
    color: ${color.orange};
    font-size: 40px;
    text-shadow: 4px 4px 10px #000000;
`

export const H2 = styled.h2`
    color: ${color.orange};
    font-size: 32px;
    text-shadow: 4px 4px 10px #000000;
`

export const H3 = styled.h3`
    color: ${color.orange};
    font-size: 22px;
    text-shadow: 4px 4px 10px #000000;
`

export const H4 = styled.h4`
    color: ${color.orange};
    font-size: 18px;
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