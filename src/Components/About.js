import React, { Fragment } from 'react'
import styled from 'styled-components'
import me from '../static/media/me.png'

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
        transform: scale(1.1);
        transition: all .2s ease-in-out;
        filter: grayscale(0%);
     }
 `

const About = (props) => (
    <Fragment>
        <div>
            <Hero src={me} />
        </div>
        <div style={{color: "#ffffff", marginTop: "30px", textAlign: "center"}}>Hey this is me.</div>
    </Fragment>
)

export default About