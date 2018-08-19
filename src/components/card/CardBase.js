import React from 'react'
import styled from 'styled-components'
import * as Text from '../Text'
import { color } from '../Helper'

const Wrapper = styled.div`
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.07); /* Need to use rgba to apply opacity */
    border: 1px solid ${color.cardWhite};
    box-shadow: 1px 6px 10px ${color.black};

    @media (min-width: 400px) {
        margin-bottom: 30px;
    }

    @media (min-width: 900px) {
        width: ${prop => prop.contact ? '47%' : 'unset'};
        margin-bottom: 50px;
    }
`

const Banner = styled.div`
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    background-color: rgba(255, 255, 255, 0.12);
    border-bottom: 1px solid ${color.cardWhite};
    box-shadow: 0px 1px 1px ${color.black};
`

const Content = styled.div`
    padding: ${prop => prop.work ? '20px 20px 40px' : '20px'};
`

const CardBase = ({noBanner, work, contact, title, date, children}) => (
    <Wrapper contact={contact}>
        {!noBanner && <Banner>
            <Text.H4>{title}</Text.H4>
            {date && <Text.Date>{date}</Text.Date>}
        </Banner>}
        <Content work={work}>
            {children}
        </Content>
    </Wrapper>
)

export default CardBase