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
    transition: all .25s ease-in-out;

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

    &:hover {
        transform: scale(1.05);
        transition: all .2s ease-in-out;
        filter: grayscale(0%);
     }
 `

const PWithPadding = styled(P)`
    padding: 10px 0;
`

const renderProfile = (profile) => {
    return profile.map((paragraph, i) => {
        // Adding padding for every second paragraph
        if (i % 2 !== 0) {
            return <PWithPadding key={i}>{paragraph}</PWithPadding>
        }
        return <P key={i}>{paragraph}</P>
    })
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