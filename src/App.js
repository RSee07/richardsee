import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import styled from 'styled-components'
import data from './static/data/personal.json'
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #282828;
`

const IntroWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 600px) {
        margin-left: 40px;
    }

    @media (min-width: 1200px) {
        margin-left: 100px;
    }
`

class App extends React.Component {
    render() {
        console.log(data)
        return (
            <BrowserRouter>
                <Fragment>
                    <Background>
                        <IntroWrapper>
                            <Intro />
                        </IntroWrapper>
                    </Background>
                    <div style={{height: '700px'}}>
                        <Switch>
                            <Route path="/work" render={() => <Work work="Work page" />} />
                            <Route path="/about" render={() => <About about="About page" />} />
                            <Route path="/contact" render={() => <Contact contact="Contact page" />} />
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default App;
