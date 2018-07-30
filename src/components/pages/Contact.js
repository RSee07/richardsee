import React, { Fragment } from 'react'
import styled from 'styled-components'
import Title, { AfterTitleWrapper } from '../Title'
import CardBase from '../card/CardBase'
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

const Content = styled.div`
    display: flex;
    align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 30px;
`

const Link = styled.a`
    font-family: 'Poppins', sans-serif;
    color: ${color.white};
    padding-left: 15px;
    margin: 0;
    display: block;
    font-size: 16px;
    text-decoration: none;
`

const Contact = ({ email, mobile, linkedIn, facebook, instagram }) => (
    <Fragment>
        <Title>Contact</Title>
        <AfterTitleWrapper>
            <CardBase title='Email'>
                <Content>
                    <Icon icon={faEnvelopeSquare}/>
                    <Link href={"mailto:" + email + "?subject=Enquiries"}>{email}</Link>
                </Content>
            </CardBase>
            <CardBase title='Mobile'>
                <Content>
                    <Icon icon={faPhoneSquare}/>
                    <Link href={"tel:" + mobile}>{mobile}</Link>
                </Content>
            </CardBase>
            <CardBase title='LinkedIn'>
                <Content>
                    <Icon icon={faLinkedin}/>
                    <Link target="_blank" rel="noopener noreferrer" href={linkedIn}>richard-see</Link>
                </Content>
            </CardBase>
            <CardBase title='Facebook'>
                <Content>
                    <Icon icon={faFacebook}/>
                    <Link target="_blank" rel="noopener noreferrer" href={facebook}>richardcysee</Link>
                </Content>
            </CardBase>
            <CardBase title='Instagram'>
                <Content>
                    <Icon icon={faInstagram}/>
                    <Link target="_blank" rel="noopener noreferrer" href={instagram}>richard_cy_see</Link>
                </Content>
            </CardBase>
        </AfterTitleWrapper>
    </Fragment>
)

export default Contact