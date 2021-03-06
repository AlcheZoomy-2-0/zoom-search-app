import React from 'react'
import { StoreProvider } from './StoreProvider.js'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import LandingPage from './LandingPage.js';
import AutoRedirect from './Redirect.js'
import Teacher from './Teacher.js';
import Student from './Student.js';
import Header from './Header.js';
import MeetingDetails from './MeetingDetails.js';


function App() {
    return (
        <StoreProvider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"
                        component={LandingPage} />
                    <Route path="/redirect/"
                        component={AutoRedirect} />
                    <Route path="/teacher"
                        component={Teacher} />
                    <Route path="/student"
                        component={Student} />
                    <Route path="/meeting/:id"
                        component={MeetingDetails} />
                </Switch >
            </Router >
        </StoreProvider >

    );
}

export default App;
