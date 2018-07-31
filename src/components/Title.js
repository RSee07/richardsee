import React from 'react'
import styled from 'styled-components'
import { color } from './Helper'
import * as Text from './Text'

export const AfterTitleWrapper = styled.div`
    padding: 20px;
    box-sizing: border-box;
    min-height: 100vh;

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
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${color.white};
`

const Title = (props) => (
    <TitleOuter>
        <TitleInner>
            <Text.H1>{props.children}</Text.H1>
        </TitleInner>
    </TitleOuter>
)

export default Title