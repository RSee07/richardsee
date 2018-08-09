import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import ScrollToTop from './components/ScrollToTop'
import personal from './static/data/personal.json'
import Content from './components/pages/Content'
import { color } from './components/Helper'

// Inject styles directly. Cannot apply styled component to body so inject directly
injectGlobal`
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        /* Color most closely matches the color where the clipping on iOS occurs */
        background: ${color.backgroundFallback}; /* Fallback for old browsers */

        &:after{
            content: "";
            position: fixed; /* Stretch a fixed position to the whole screen */
            top: 0;
            height: 100vh; /* Fix for mobile browser address bar appearing disappearing */
            left: 0;
            right: 0;
            z-index: -1; /* Needed to keep in the background */
            background: ${color.background};
            background-size: 100% 100%;
        }
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
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
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
        return (
            <BrowserRouter>
                <ScrollToTop>
                    {this.state.data && <Content data={this.state.data} />}
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}