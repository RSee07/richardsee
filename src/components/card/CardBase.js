import React from 'react'
import styled from 'styled-components'
import * as Text from '../Text'
import { color } from '../Helper'

const Wrapper = styled.div`
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: ${color.cardGrey};
    box-shadow: 1px 6px 10px ${color.black};
`

const Banner = styled.div`
    padding: 15px 20px;
    background-color: ${color.orange};
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 1px 1px ${color.black};
`

const Content = styled.div`
    padding: 20px;
`

const CardBase = ({noBanner, title, date, children}) => (
    <Wrapper>
        {!noBanner && <Banner>
            <Text.H4>{title}</Text.H4>
            {date && <Text.Date>{date}</Text.Date>}
        </Banner>}
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default CardBase