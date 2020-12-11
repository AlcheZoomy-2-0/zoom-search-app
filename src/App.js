import React from 'react'
import { StoreProvider } from './StoreProvider.js'

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import LandingPage from './LandingPage.js';
import Redirect from './Redirect.js';

function App() {
    return (
        <StoreProvider>
            <Router>
                {/* Header */}
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/redirect"
                        component={Redirect}>
                        <Redirect />
                    </Route>
                    {/* redirect */}
                    {/* /teacher */}
                    {/* /student */}
                </Switch>
            </Router>
        </StoreProvider>

    );
}

export default App;
