import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FooterWrapper = styled.footer`
    display: inline-block;
    position: fixed;
    z-index: 1;
    bottom: 15px;
    right: 15px;
`

const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #3C3C3C;
    box-shadow: 2px 2px 20px 3px #000000;
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
    background-color: #ffffff;
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
    bottom: -5px;
    right: 75px;
    transition: 0.3s;
    opacity: ${prop => prop.open ? '1' : '0'};
    transform: ${prop => prop.open ? 'translate(0)' : 'translate(20px)'};
`

const ListWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 150px;
`

const ListItem = styled.li`
    display: inline-flex;
    padding: 0;
    margin: 7px 0;
    width: 100%;
    height: 40px;
    background-color: #3C3C3C;
    box-shadow: 2px 2px 10px 2px #000000;

    @media (min-width: 1200px) {
        height: 50px;
    }
`

const Navlink = styled(NavLink)`
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

// Declare pages
const pages = ['', 'Experience', 'About', 'Contact']

export default class Footer extends React.Component {
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
            return <ListItem key={page}><Navlink onClick={this.toggleDropdown} to={to}>{title}</Navlink></ListItem>
        })

        return(
            <FooterWrapper>
                <Circle>
                    <BarWrapper>
                        <Bar1 open={this.state.openDropdown}></Bar1>
                        <Bar2 open={this.state.openDropdown}></Bar2>
                        <Bar3 open={this.state.openDropdown}></Bar3>
                    </BarWrapper>
                </Circle>
                <DropdownButton onClick={this.toggleDropdown} />
                <Nav open={this.state.openDropdown}>
                    <ListWrapper>
                        {links}
                    </ListWrapper>
                </Nav>
            </FooterWrapper>
        )
    }
}