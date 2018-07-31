import React from 'react'
import styled from 'styled-components'
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
    height: 60vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.22);
    box-shadow: 0 5px 30px 10px rgba(0,0,0,0.22);
`

const TitleInner = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    border-top: 1px solid ${color.white};
    border-bottom: 1px solid ${color.white};
`

const Title = ({children}) => (
    <TitleOuter>
        <TitleInner>
            <Text.H1>{children}</Text.H1>
        </TitleInner>
    </TitleOuter>
)

export default Title