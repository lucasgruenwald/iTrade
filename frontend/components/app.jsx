import React from 'react';
import Home from './home/home';
import Login from './login/login_container';
import Signup from './signup/signup_container';
// import Dash from './dashboard/dashboard_container'
import { Route } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util'
import GreetingContainer from "./greeting/greeting_container";


export default () => (
    <div>
        <header>
            <GreetingContainer />
        </header>
        
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/dashboard" component={Dash} /> */}
    </div>
);

