import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CardBaseList } from '../card/CardBase'
import * as Text from '../Text'
import { color } from '../Helper'

const Link = styled.a`
    color: ${color.white};
    margin: 0;
    display: block;
    font-size: 30px;
    text-decoration: none;

`

const Contact = ({ email, mobile, linkedIn, facebook, instagram }) => (
    <Fragment>
        <Text.H1>Contact</Text.H1>
        <CardBaseList><Link href={"mailto:" + email + "?subject=Enquiries"}>Email</Link></CardBaseList>
        <CardBaseList><Link href={"tel:" + mobile}>Mobile</Link></CardBaseList>
        <CardBaseList><Link target="_blank" rel="noopener noreferrer" href={linkedIn}>LinkedIn</Link></CardBaseList>
        <CardBaseList><Link target="_blank" rel="noopener noreferrer" href={facebook}>Facebook</Link></CardBaseList>
        <CardBaseList><Link target="_blank" rel="noopener noreferrer" href={instagram}>Instagram</Link></CardBaseList>
    </Fragment>
)

export default Contact