import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home.jsx';

import Hotels from './Components/Hotels/Hotels';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/privateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
    const [loggedUser, setLoggedUser] = useState({});
    return (
        <UserContext.Provider value={[loggedUser, setLoggedUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/booking/:destinationId">
                        <Booking />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>

                    <PrivateRoute path="/hotel/:locationId">
                        <Hotels />
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
