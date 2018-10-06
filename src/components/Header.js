import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom'
import { color } from './Helper'

// Declare pages
const pages = ['', 'About', 'Work', 'Contact']
const transitionName = 'nav'

const HeaderWrapper = styled.header`
    display: inline-block;
    position: fixed;
    z-index: 1;
    top: 15px;
    right: 15px;
`

const Circle = styled.div`
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 2px solid ${color.white};
    background: ${color.background};
    box-shadow: 0 0 10px 3px ${color.black};
    display: flex;
    align-items: center;
    justify-content: center;
`

const BarWrapper = styled.div`
    margin-bottom: 1px;
`

const Bar1 = styled.div`
    width: 35px;
    height: 5px;
    background-color: ${color.white};
    transition: 0.3s;
    margin: auto;
    transform: ${prop => prop.open ? 'rotate(-45deg) translate(-8px, 7.5px)' : undefined};
`

const Bar2 = Bar1.extend`
    margin: 6px auto;
    transform: none;
    opacity: ${prop => prop.open ? '0' : '1'};
`

const Bar3 = Bar1.extend`
    transform: ${prop => prop.open ? 'rotate(45deg) translate(-7.5px, -8px)' : undefined};
`

const DropdownButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    background-color: inherit;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

const Nav = styled.nav`
    position: absolute;
    top: -5px;
    right: 75px;
    transition: 0.3s;

    &.${transitionName}-enter {
        opacity: 0;
        transform: translate(20px);
    }

    &.${transitionName}-enter-active {
        opacity: 1;
        transform: translate(0);
    }

    &.${transitionName}-exit {
        opacity: 1;
        transform: translate(0);
    }

    &.${transitionName}-exit-active {
        opacity: 0.1;
        transform: translate(20px);
    }
`

const ListWrapper = styled.ul`
    list-style-type: none;
    padding: 7px 0;
    margin: 0;
    width: 150px;
    background: ${color.background};
    border: 1px solid ${color.white};
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px ${color.black};
`

const ListItem = styled.li`
    display: inline-flex;
    padding: 0;
    width: 100%;
    height: 40px;
`

const Navlink = styled(NavLink)`
    width: 100%;
    text-align: center;
    color: ${color.white};
    text-decoration: none;
    font-size: 20px;
    margin: 7px 0;
    transition: all .15s ease-in-out;

    &:hover {
        transition: all .15s ease-in-out;
        color: ${color.orange};
    }

    &.active {
        color: ${color.arrowOrange};
    }
`

export default class Header extends React.PureComponent {
    state = {
        openDropdown: false,
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            openDropdown: !prevState.openDropdown
        }))
    }

    render() {
        const links = pages.map(page => {
            const to = `/${page.toLowerCase()}`
            const title = (page === '') ? 'Home' : page
            return (
                <ListItem key={page}>
                    <Navlink
                        exact
                        onClick={this.toggleDropdown}
                        to={to}
                    >
                        {title}
                    </Navlink>
                </ListItem>
            )
        })

        return(
            <HeaderWrapper>
                <Circle>
                    <BarWrapper>
                        <Bar1 open={this.state.openDropdown}></Bar1>
                        <Bar2 open={this.state.openDropdown}></Bar2>
                        <Bar3 open={this.state.openDropdown}></Bar3>
                    </BarWrapper>
                </Circle>
                <DropdownButton onClick={this.toggleDropdown} />
                <CSSTransition
                    in={this.state.openDropdown}
                    timeout={100}
                    classNames={transitionName}
                    unmountOnExit
                >
                    <Nav>
                        <ListWrapper>
                            {links}
                        </ListWrapper>
                    </Nav>
                </CSSTransition>
            </HeaderWrapper>
        )
    }
}