import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color } from '../Helper'

const Link = styled.a`
    color: ${color.white};
    margin: 20px;
    display: block;
    font-size: 30px;
    text-decoration: none;
    transition: all .15s ease-in-out;

    &:hover {
        transition: all .15s ease-in-out;
        color: ${color.orange};
    }
`
const Contact = (props) => (
    <Fragment>
        <Link href={"mailto:" + props.contact.email + "?subject=Enquiries"}>Email</Link>
        <Link href={"tel:" + props.contact.mobile}>Mobile</Link>
        <Link target="_blank" rel="noopener noreferrer" href={props.contact.linkedIn}>LinkedIn</Link>
        <Link target="_blank" rel="noopener noreferrer" href={props.contact.facebook}>Facebook</Link>
        <Link target="_blank" rel="noopener noreferrer" href={props.contact.instagram}>Instagram</Link>
    </Fragment>
)

export default Contact