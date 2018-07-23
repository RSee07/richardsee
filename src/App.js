import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import styled from 'styled-components'
import data from './static/data/personal.json'
import Header from './components/Header'
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #282828;
`

const RouteWrapper = styled.div`
    height: 100%;
    margin-left: ${prop => prop.marginLeft ? "20px" : "0"};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 600px) {
        margin-left: ${prop => prop.marginLeft ? "40px" : "0"};
    }

    @media (min-width: 1200px) {
        margin-left: ${prop => prop.marginLeft ? "100px" : "0"};
    }
`

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Background>
                        <Switch>
                            <Route
                                path="/about"
                                render={() => <Fragment><Header /><RouteWrapper><About about="About page" /></RouteWrapper></Fragment>}
                            />
                            <Route
                                path="/work"
                                render={() => <Fragment><Header /><RouteWrapper><Work work="Work page" /></RouteWrapper></Fragment>}
                            />
                            <Route
                                path="/contact"
                                render={() => <Fragment><Header /><RouteWrapper marginLeft ><Contact contact={data.contact}/></RouteWrapper></Fragment>}
                            />
                            <Route
                                path="/"
                                render={() => <RouteWrapper marginLeft ><Intro /></RouteWrapper>}
                            />
                        </Switch>
                    </Background>
                </Fragment>
            </BrowserRouter>
        )
    }
}