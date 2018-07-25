import React from 'react'
import styled from 'styled-components'

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
    box-shadow: 2px 2px 40px #000000;
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
    transition: 0.4s;
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
                <Circle>
                    <BarWrapper>
                        <Bar1 open={this.state.openDropdown}></Bar1>
                        <Bar2 open={this.state.openDropdown}></Bar2>
                        <Bar3 open={this.state.openDropdown}></Bar3>
                    </BarWrapper>
                </Circle>
                <DropdownButton onClick={this.toggleDropdown} />
            </FooterWrapper>
        )
    }
}