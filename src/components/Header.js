import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.header`
    position: fixed;
    width: 100%;
    text-align: right;
    background-color: green;
    height: 40px;
`

const Icon = styled.div`
    width: 30px;
    height: 30px;
    background-color: blue;
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

export default class Header extends React.Component {
    render() {
        return(
            <Fragment>
                <Head>
                    <Icon/>
                    {/* <Nav to="/work">Work</Nav>
                    <Nav to="/about">About</Nav>
                    <Nav to="/contact">Contact</Nav> */}
                </Head>
            </Fragment>
        )
    }
}