import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.header`
    position: absolute;
    top: 0;
    right: 0;
`

const Header = () => (
    <Fragment>
        <Head>
            <NavLink to="/work" style={{padding: "15px", display: "inline-block"}}>Work</NavLink>
            <NavLink to="/about" style={{padding: "15px", display: "inline-block"}}>About</NavLink>
            <NavLink to="/contact" style={{padding: "15px", display: "inline-block"}}>Contact</NavLink>
            <NavLink to="/testpage" style={{padding: "15px", display: "inline-block"}}>Test link</NavLink>
        </Head>
    </Fragment>
)

export default Header