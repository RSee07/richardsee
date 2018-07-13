import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.header`
    text-align: right;
    padding: 20px;
`

const Nav = styled(NavLink)`
    margin: 0 15px;
    color: #ffffff;
    display: inline-block;
    text-decoration: none;
    font-size: 28px;
    transition: all .15s ease-in-out;

    @media (min-width: 600px) {
        font-size: 32px;
    }

    @media (min-width: 900px) {
        font-size: 40px;
    }

    @media (min-width: 1200px) {
        font-size: 50px;
    }

    &:hover {
        transform: scale(1.1);
        transition: all .15s ease-in-out;
        color: #ff6600;
    }
`

const Header = () => (
    <Fragment>
        <Head>
            <Nav to="/work">Work</Nav>
            <Nav to="/about">About</Nav>
            <Nav to="/contact">Contact</Nav>
        </Head>
    </Fragment>
)

export default Header