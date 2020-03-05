import React from 'react';
import Home from './home/home';
import Login from './login/login';
import Signup from './signup/signup';
import { Route } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";


export default () => (
    <div>
        <header>
            <h1> iTrade </h1>
            <GreetingContainer />
        </header>
        
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </div>
);