import React from 'react'
import { 
    BrowserRouter,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import styled from 'styled-components'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
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

const TitleContainer = styled.div`
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
        box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05);
        filter: blur(15px);
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
    font-size: 32px;

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 900px) {
        font-size: 50px;
    }

    @media (min-width: 1200px) {
        font-size: 50px;
    }

    @media (min-width: 1800px) {
        font-size: 50px;
    }
`

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Background>
                        <TitleContainer>
                            <TitleBox>
                                <Title>Richard See</Title>
                            </TitleBox>
                        </TitleContainer>
                    </Background>

                    <div style={{height: '1000px'}}>
                        <header>
                            <NavLink to="/work" style={{padding: "10px", display: "inline-block"}}>Work</NavLink>
                            <NavLink to="/about" style={{padding: "10px", display: "inline-block"}}>About</NavLink>
                            <NavLink to="/contact" style={{padding: "10px", display: "inline-block"}}>Contact</NavLink>
                            <NavLink to="/testpage" style={{padding: "10px", display: "inline-block"}}>Test link</NavLink>
                        </header>
                        <Switch>
                            <Route path="/work" render={() => <Work work="Work page" />} />
                            <Route path="/about" render={() => <About about="About page" />} />
                            <Route path="/contact" render={() => <Contact contact="Contact page" />} />
                            <Route path="/testpage" component={TestPage} />
                        </Switch>
                    </div>
                    
                </div>
            </BrowserRouter>
        )
    }
}

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

export default App;
