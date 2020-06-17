import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.scss'
import Profile from './components/Profile'
import Messages from './components/Messages'
import { Container } from 'react-bootstrap'
import Dashboard from './components/Dashboard'

function App() {
    return (
        <Router>
            <div className="App">
                <Container fluid>
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/messages">
                            <Messages />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/">
                            <header>
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                    Edit <code>src/App.tsx</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                                <Link to="/profile">Profile</Link>
                            </header>
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    )
}

export default App
