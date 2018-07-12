import React, { Fragment } from 'react'
import { 
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import styled from 'styled-components'
import Work from './Work'
import About from './About'
import Contact from './Contact'

const Head = styled.header`
    position: absolute;
    top: 0;
    right: 0;
`

const Header = () => (
    <Fragment>
        <Head>
            <NavLink to="/work" style={{padding: "15px", display: "inline-block"}}>Work</NavLink>
            <NavLink to="/about" style={{padding: "15px", display: "inline-block"}}>About</NavLink>
            <NavLink to="/contact" style={{padding: "15px", display: "inline-block"}}>Contact</NavLink>
            <NavLink to="/testpage" style={{padding: "15px", display: "inline-block"}}>Test link</NavLink>
        </Head>
        <Switch>
            <Route path="/work" render={() => <Work work="Work page" />} />
            <Route path="/about" render={() => <About about="About page" />} />
            <Route path="/contact" render={() => <Contact contact="Contact page" />} />
            <Route path="/testpage" component={TestPage} />
        </Switch>
    </Fragment>
)

const TestPage = () => (
    <div>
        <h3>Welcome to the new page. Please select more options</h3>
        <NavLink to="/testpage/one" style={{padding: "0 10px"}}>One</NavLink>
        <NavLink to="/testpage/two" style={{padding: "0 10px"}}>Two</NavLink>
        <NavLink to="/testpage/three" style={{padding: "0 10px"}}>Three</NavLink>
        <Route
            path="/testpage/:count"
            render={({match}) => <div style={{padding: "15px"}}>{match.params.count}</div>}
        />
    </div>
)

export default Header