import React from 'react'
import styled from 'styled-components'
import hero from './static/media/hero.JPG'

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${hero});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleWrapper = styled.div`
  position: relative;
  background: inherit;
  border-radius: 10px;
  overflow: hidden;

  &:after {
    content: '';
    background: inherit;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05);
    filter: blur(10px);
  }
`

const TitleBox = styled.div`
  padding: 15px 40px;
  position: relative;
  z-index: 1;
`

const Title = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 50px;
`

const FrostGlassExample = () => (
  <Background>
    <TitleWrapper>
      <TitleBox>
        <Title>Example</Title>
      </TitleBox>
    </TitleWrapper>
  </Background>
)

export default FrostGlassExample
