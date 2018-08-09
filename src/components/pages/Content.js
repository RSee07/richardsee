import React, { Fragment } from 'react'
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Header'
import Intro from './Intro'
import Work from './Work'
import About from './About'
import Contact from './Contact'

// Declare pages
const pages = ['about', 'work', 'contact']
const transitionName = 'pg'

const Wrapper = styled.div`
    padding: 0;
    margin: 0;

    .${transitionName}-enter {
        opacity: 0.1;
        transform: translate(20px);
    }

    .${transitionName}-enter-active {
        opacity: 1;
        transform: translate(0);
        transition: all 300ms ease-in;
    }

    .${transitionName}-exit {
        opacity: 1;
        transform: translate(0)
    }

    .${transitionName}-exit-active {
        opacity: 0.1;
        transform: translate(20px);
        transition: all 300ms ease-in;
    }
`


const Content = ({ data, location }) => {
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
                    pageType = <Work coreSkills={data.coreSkills} careerHistory={data.careerHistory} />
                    break
                case ('contact'):
                    pageType = <Contact {...data.contact}/>
                    break
                default:
                    break
            }

            return (
                <Route key={page}
                    path={path}
                    render={() => {
                        return (
                            <Fragment>
                                <Header/>
                                {pageType}
                            </Fragment>
                        )}
                    }
                />
            )
        })
        
        return (
            <Wrapper>
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames={transitionName}
                        unmountOnExit
                    >
                    <section className="route-section">
                        <Switch location={location}>
                            {/* Conditionally render routeLinks once data has been loaded */}
                            {data && routeLinks}
                            <Route
                                path="/"
                                render={() => <Intro />}
                            />
                        </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </Wrapper>
        )
}

export default withRouter(Content)