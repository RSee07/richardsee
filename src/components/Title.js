import React from 'react'
import styled from 'styled-components'
import { color } from './Helper'
import * as Text from './Text'

export const AfterTitleWrapper = styled.div`
    margin: 20px 20px 0;
    min-height: 100vh;
`

const TitleOuter = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 20px;
`

const TitleInner = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${color.white}
`

const Title = (props) => (
    <TitleOuter>
        <TitleInner>
            <Text.H1>{props.children}</Text.H1>
        </TitleInner>
    </TitleOuter>
)

export default Title