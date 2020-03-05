import React from 'react';
import Home from './home/home';
import Login from './login/login';
import Signup from './signup/signup';
import { Route } from 'react-router-dom';


export default () => (
    <div>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
    </div>
);