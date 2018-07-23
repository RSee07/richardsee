import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.header`
    position: fixed;
    width: 100%;
    height: 40px;
    z-index: 1;
    background-color: #020202;
    box-shadow: 0px 0px 8px 2px #000000;
`

const DropdownWrapper = styled.div`
    width: 40px;
    height: 40px;
    margin: auto;
    background-color: yellow;

    &:focus {
        outline: none;
    }
`

const DropdownButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: inherit;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

const ListWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: #020202;
    box-shadow: 0px 0px 8px 2px #000000;
`

const ListItem = styled.li`
    display: inline-flex;
    padding: 0;
    width: 100%;
    height: 40px;
    border-top: white 1px solid;

    @media (min-width: 1200px) {
        height: 50px;
    }
`

const Nav = styled(NavLink)`
    width: 100%;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    margin: auto;
    transition: all .15s ease-in-out;

    @media (min-width: 1200px) {
        font-size: 28px;
    }

    &:hover {
        transition: all .15s ease-in-out;
        color: #ff6600;
    }
`

export default class Header extends React.Component {
    state = {
        openDropdown: false,
    }

    toggleDropdown = this.toggleDropdown.bind(this)

    toggleDropdown() {
        this.setState(prevState => ({
            openDropdown: !prevState.openDropdown
        }))
    }

    render() {
        return(
            <Fragment>
                <Head>
                    <DropdownWrapper>
                        <DropdownButton onClick={this.toggleDropdown}>RS</DropdownButton>
                    </DropdownWrapper>
                    {
                        this.state.openDropdown && 
                        <nav>
                            <ListWrapper>
                                <ListItem><Nav onClick={this.toggleDropdown} to="/">Home</Nav></ListItem>
                                <ListItem><Nav onClick={this.toggleDropdown} to="/work">Work</Nav></ListItem>
                                <ListItem><Nav onClick={this.toggleDropdown} to="/about">About</Nav></ListItem>
                                <ListItem><Nav onClick={this.toggleDropdown} to="/contact">Contact</Nav></ListItem>
                            </ListWrapper>
                        </nav>
                    }
                </Head>
            </Fragment>
        )
    }
}