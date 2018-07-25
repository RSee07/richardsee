import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    display: inline-block;
    position: relative;
    z-index: 1;
`

const Bar1 = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ffffff;
    transition: 0.4s;
    transform: ${prop => prop.open ? 'rotate(-45deg) translate(-9px, 9px)' : undefined};
`

const Bar2 = Bar1.extend`
    margin: 8px 0;
    transform: none;
    opacity: ${prop => prop.open ? '0' : '1'};
`

const Bar3 = Bar1.extend`
    transform: ${prop => prop.open ? 'rotate(45deg) translate(-9px, -9px)' : undefined};
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

export default class Footer extends React.Component {
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
            <FooterWrapper>
                <Bar1 open={this.state.openDropdown}></Bar1>
                <Bar2 open={this.state.openDropdown}></Bar2>
                <Bar3 open={this.state.openDropdown}></Bar3>
                <DropdownButton onClick={this.toggleDropdown} />
            </FooterWrapper>
        )
    }
}