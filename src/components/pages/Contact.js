import React, { Fragment } from 'react'
import styled from 'styled-components'
import Title, { AfterTitleWrapper } from '../Title'
import { CardBaseList } from '../card/CardBase'
import * as Text from '../Text'
import { color } from '../Helper'
// Explicit import as limited number of icons used.
// Allows icons to be subsetted, optimizing final bundle. Only icons imported are included in the bundle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Link = styled.a`
    color: ${color.white};
    margin: 0;
    display: block;
    font-size: 18px;
    text-decoration: none;
`

const Icon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 30px;
`

const Contact = ({ email, mobile, linkedIn, facebook, instagram }) => (
    <Fragment>
        <Title>Contact</Title>
        <AfterTitleWrapper>
            <CardBaseList><Link href={"mailto:" + email + "?subject=Enquiries"}>{email}</Link><Icon icon={faEnvelopeSquare} /></CardBaseList>
            <CardBaseList><Link href={"tel:" + mobile}>{mobile}</Link><Icon icon={faPhoneSquare} /></CardBaseList>
            <CardBaseList><Link target="_blank" rel="noopener noreferrer" href={linkedIn}>richard-see</Link><Icon icon={faLinkedin} /></CardBaseList>
            <CardBaseList><Link target="_blank" rel="noopener noreferrer" href={facebook}>richardcysee</Link><Icon icon={faFacebook} /></CardBaseList>
            <CardBaseList><Link target="_blank" rel="noopener noreferrer" href={instagram}>richard_cy_see</Link><Icon icon={faInstagram} /></CardBaseList>
        </AfterTitleWrapper>
    </Fragment>
)

export default Contact