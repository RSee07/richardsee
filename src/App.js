import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Richard</h1>
                    </header>

                    <Link to="/newpage" >Test link</Link>
                    <Route path="/newpage" component={NewPage} />
                </div>
            </BrowserRouter>
        );
    }
}

const NewPage = () => (
    <div>
        <h3>Welcome to the new page. Please select more options</h3>
        <Link to="/newpage/one" style={{padding: "0 10px"}}>One</Link>
        <Link to="/newpage/two" style={{padding: "0 10px"}}>Two</Link>
        <Link to="/newpage/three" style={{padding: "0 10px"}}>Three</Link>
        <Route
            path="/newpage/:count"
            render={({match}) => <div style={{padding: "15px"}}>{match.params.count}</div>}
        />
    </div>
)

export default App;
