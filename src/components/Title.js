import React from 'react'
import styled from 'styled-components'
import { ArrowDown } from './Arrow'
import { color } from './Helper'
import * as Text from './Text'

export const AfterTitleWrapper = styled.div`
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;

    @media (min-width: 600px) {
        padding: 50px;
    }
`

const TitleOuter = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 20px;

    @media (min-width: 600px) {
        padding: 50px;
    }
`

const TitleInner = styled.div`
    width: 100%;
    height: 84%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${color.white};
`

const ArrowContainer = styled.div`
    width: 100%;
    height: 16%;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const Title = ({children}) => (
    <TitleOuter>
        <TitleInner>
            <Text.H1>{children}</Text.H1>
        </TitleInner>
        <ArrowContainer>
            <ArrowDown color={color.white}/>
        </ArrowContainer>
    </TitleOuter>
)

export default Title