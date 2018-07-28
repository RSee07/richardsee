import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import styled from 'styled-components'
import personal from './static/data/personal.json'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

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
                    pageType = <Contact contact={this.state.data.contact}/>
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