import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import personal from './static/data/personal.json'
import Footer from './components/Footer'
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

        background:
            linear-gradient(135deg, hsla(287.55, 0%, 0%, 1) 0%, hsla(287.55, 0%, 0%, 0) 70%),
            linear-gradient(25deg, hsla(23.77, 98.65%, 29.08%, 1) 10%, hsla(23.77, 98.65%, 29.08%, 0) 80%),
            linear-gradient(315deg, hsla(281.89, 79.63%, 32.15%, 1) 15%, hsla(281.89, 79.63%, 32.15%, 0) 80%),
            linear-gradient(245deg, hsla(273.92, 0%, 0%, 1) 100%, hsla(273.92, 0%, 0%, 0) 70%);
        background-size: cover;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
`

const RouteWrapper = styled.div`
    margin: 60px 20px 90px;
`

const RouteWrapperHome = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;

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
                    render={() => <Fragment><RouteWrapper>{pageType}</RouteWrapper><Footer/></Fragment>}
                />
            )
        })

        return (
            <BrowserRouter>
                <Switch>
                    {/* Conditionally render routeLinks once data has been loaded */}
                    {this.state.data && routeLinks}
                    <Route
                        path="/"
                        render={() => <RouteWrapperHome marginLeft ><Intro /></RouteWrapperHome>}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}