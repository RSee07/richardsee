import React from 'react'
import styled from 'styled-components'
import PageBase from './PageBase'
import CardBase from '../card/CardBase'
import { P } from '../Text'
import me from '../../static/media/me.png'

const Hero = styled.img`
    height: 220px;
    width: 220px;
    margin: auto;
    display: block;
    filter: grayscale(100%);

    @media (min-width: 600px) {
        height: 320px;
        width: 320px;
    }

    @media (min-width: 900px) {
        height: 400px;
        width: 400px;
    }

    @media (min-width: 1200px) {
        height: 420px;
        width: 420px;
    }
 `

const PWithPadding = styled(P)`
    padding: 10px 0;
`

const renderProfile = (profile) => {
    return profile.map((paragraph, i) => (
        <PWithPadding key={i}>{paragraph}</PWithPadding>
    ))
}

const About = ({ profile }) => (
    <PageBase title='About'>
        <CardBase noBanner>
            <Hero src={me} />
        </CardBase>
        <CardBase noBanner>
            {renderProfile(profile)}
            {/* <Text.P>{`${profile}`}</Text.P> */}
        </CardBase>
    </PageBase>
)

export default About