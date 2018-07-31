import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowRight } from '../Arrow'
import { H1, P } from '../Text'
import { color } from '../Helper'

const Wrapper = styled.div`
    width: 100vw;
    box-sizing: border-box;
    padding-top: calc(100vh / 5.5);
    padding-left: 30px;

    @media (min-width: 400px) {
        padding-left: 50px;
    }
`

const Nav = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-decoration: none;
`

const Text = H1.extend`
    font-family: 'Poppins', sans-serif;
    color: ${color.white};
    font-size: 40px;
    font-weight: normal;
    line-height: 1.2;
    transition: all .15s ease-in-out;
    width: 80%;
    text-shadow: none;

    @media (min-width: 375px) {
        font-size: 46px;
    }

    @media (min-width: 400px) {
        font-size: 50px;
    }

    @media (min-width: 600px) {
        font-size: 38px;
    }

    @media (min-width: 900px) {
        font-size: 60px;
    }

    @media (min-width: 1200px) {
        font-size: 70px;
    }

    &:hover {
        transition: all .15s ease-in-out;
        color: ${color.orange};
    }
`

const IntroP = P.extend`
    @media (min-width: 375px) {
        font-size: 20px;
    }

    @media (min-width: 400px) {
        font-size: 24px;
    }
`

const Intro = () => (
    <Wrapper>
        <IntroP>HI MY NAME IS</IntroP>
        <Nav to="/about">
            <Text>RICHARD</Text>
            <ArrowRight/>
        </Nav>
        <IntroP>I'M A</IntroP>
        <Nav to="/work">
            <Text>SOFTWARE ENGINEER</Text>
            <ArrowRight/>
        </Nav>
        <IntroP>LET'S</IntroP>
        <Nav to="/contact">
            <Text>TALK</Text>
            <ArrowRight/>
        </Nav>
    </Wrapper>
)

export default Intro