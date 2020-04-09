import React from 'react';
import Home from './home/home';
import Login from './login/login_container';
import Signup from './signup/signup_container';
import Dash from './dashboard/dashboard_container'
import Stock from './stock/stock_page_container';
// import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import GreetingContainer from "./greeting/greeting_container";
import NavContainer from "./nav/nav_container"


export default () => (
    <div>
        <header>
            <GreetingContainer />
        </header>
        
        <AuthRoute exact path="/" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
        <ProtectedRoute path="/dashboard" component={Dash} />
        <ProtectedRoute path="/stock/:ticker" component={Stock} />
    </div>
);

