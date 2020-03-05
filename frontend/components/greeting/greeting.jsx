import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = ({ currentUser, logout }) => {

    const loggedGreet = () => {
        return (
            <div className="greet-yes">
                <h2 className="greet-name">Hi, {currentUser.firstName}!</h2>
                <button className="greet-logout" onClick={logout}>Log Out</button>
            </div>
        )
    }

    const sessionLinks = () => {
        return (
            <div className="greet-no">
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }

    return currentUser ? loggedGreet() : sessionLinks();
    
}