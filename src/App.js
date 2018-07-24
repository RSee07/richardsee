import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import styled from 'styled-components'
import personal from './static/data/personal.json'
import Header from './components/Header'
import Intro from './components/Intro'
import Experience from './components/Experience'
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
        // Declare pages
        const pages = ['about', 'experience', 'contact']

        // Loop through pages and generate Route for each
        const routeLinks = pages.map(page => {
            const path = '/' + page
            let pageType

            switch(page) {
                case ('about'):
                    pageType = <About page="About page" />
                    break
                case ('experience'):
                    pageType = <Experience coreSkills={this.state.data.coreSkills} careerHistory={this.state.data.careerHistory} />
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
                    render={() => <Fragment><Header /><RouteWrapper>{pageType}</RouteWrapper></Fragment>}
                />
            )
        })

        return (
            <BrowserRouter>
                <Fragment>
                    <Background>
                        <Switch>
                            {/* Conditionally render routeLinks once data has been loaded */}
                            {this.state.data && routeLinks}
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