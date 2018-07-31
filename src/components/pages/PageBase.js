import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color } from '../Helper'
import * as Text from '../Text'

const TitleOuter = styled.div`
    width: 100vw;
    height: 60vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.22);
    box-shadow: 0 5px 30px 10px rgba(0,0,0,0.22);

    @media (min-width: 600px) {
        height: 40vw;
    }
`

const TitleInner = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    border-top: 1px solid ${color.white};
    border-bottom: 1px solid ${color.white};
`

const PageContent = styled.div`
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;

    @media (min-width: 600px) {
        padding: 50px;
    }
`

const PageBase = ({title, children}) => (
    <Fragment>
        <TitleOuter>
            <TitleInner>
                <Text.H1>{title}</Text.H1>
            </TitleInner>
        </TitleOuter>
        <PageContent>
            {children}
        </PageContent>
    </Fragment>
)

export default PageBase