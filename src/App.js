import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import ScrollToTop from './components/ScrollToTop'
import personal from './static/data/personal.json'
import Header from './components/Header'
import Intro from './components/pages/Intro'
import Work from './components/pages/Work'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import { color } from './components/Helper'

// Inject styles directly. Cannot apply styled component to body so inject directly
injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: ${color.black};  /* Fallback for old browsers */
        background: ${color.background};
        background-size: cover;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
`

const RouteWrapperHome = styled.div`
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: calc(100vh / 2.7);
    padding-left: 20px;

    @media (min-width: 600px) {
        margin-left: 40px;
    }

    @media (min-width: 1200px) {
        margin-left: 100px;
    }
`

// Declare pages
const pages = ['about', 'work', 'contact']

export default class App extends React.Component {
    // State definition
    state = {
        data: ""
    }

    componentDidMount() {
        // Set data to JSON data once component has mounted
        this.setState({
            data: personal
        })
    }

    render() {
        // Loop through pages and generate Route for each
        // Figure out how to only render once
        const routeLinks = pages.map(page => {
            const path = '/' + page
            let pageType

            switch(page) {
                case ('about'):
                    pageType = <About page="About page" />
                    break
                case ('work'):
                    pageType = <Work coreSkills={this.state.data.coreSkills} careerHistory={this.state.data.careerHistory} />
                    break
                case ('contact'):
                    pageType = <Contact {...this.state.data.contact}/>
                    break
                default:
                    break
            }

            return (
                <Route key={page}
                    path={path}
                    render={() => <Fragment><Header/>{pageType}</Fragment>}
                />
            )
        })

        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        {/* Conditionally render routeLinks once data has been loaded */}
                        {this.state.data && routeLinks}
                        <Route
                            path="/"
                            render={() => <RouteWrapperHome marginLeft ><Intro /></RouteWrapperHome>}
                        />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}