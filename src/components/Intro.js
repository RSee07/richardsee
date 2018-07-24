import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled(Link)`
    margin: 10px 0;
    color: #ffffff;
    display: block;
    text-decoration: none;
    font-size: 20px;
    transition: all .15s ease-in-out;

    @media (min-width: 375px) {
        font-size: 23px;
    }

    @media (min-width: 414px) {
        font-size: 26px;
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
        color: #ff6600;
    }
`

const Intro = () => (
    <Fragment>
        <Nav to="/about">HI MY NAME IS RICHARD</Nav>
        <Nav to="/experience">I'M A SOFTWARE ENGINEER</Nav>
        <Nav to="/contact">PLEASE GET IN TOUCH</Nav>
    </Fragment>
)

export default Intro