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
    html {
        min-height: 100%;
        width: 100%;
    }

    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: ${color.black}; /* Fallback for old browsers */
        background: ${color.background};
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
`

// Forces gradient background to be over the mobile viewport only
// Without this on iOS gradient over the entire height of the page
// Having this works for Android. iOS has the bottom pop
// Probably not needed for desktop
const GradientBackground = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    background: ${color.background};
    z-index: -10;
    /* background-repeat: no-repeat; */
    background-attachment: local;
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
            <Fragment>
                <GradientBackground/>
                <BrowserRouter>
                    <ScrollToTop>
                        <Switch>
                            {/* Conditionally render routeLinks once data has been loaded */}
                            {this.state.data && routeLinks}
                            <Route
                                path="/"
                                render={() => <Intro />}
                            />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
            </Fragment>
            
        )
    }
}