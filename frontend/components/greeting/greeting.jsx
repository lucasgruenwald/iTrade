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
            // <div className="greet-no">
                <header className="home-header">
                    <h1 id="head-1"><Link to="/" id="home-link">iTrade</Link></h1>
                    <a href="https://media0.giphy.com/media/oALtlsKnoRtNS/giphy.webp?cid=790b76113de0ddbbb8880ea860957cab324cf18a7dd5325f&rid=giphy.webp"
                        target="_blank">
                        <img src="https://images.squarespace-cdn.com/content/53fe4a70e4b0a2293ab0e42a/1409174396100-ZOPXZKUNVM31K4NZHVK0/Robinhood_Glyph_green.png?content-type=image%2Fpng" 
                        className="feather-img" /></a>
                    <h1 id="head-2">Products</h1>
                    <h1 id="head-3">Learn</h1>
                    <a href="https://linkedin.com/in/lukegruenwald"><img id="head-4" src="https://img.icons8.com/plasticine/2x/linkedin.png"/></a>
                    <div className="header-session">
                        <h1><Link to="/login" id="sign-in-home">Log In</Link></h1>
                        <h1><Link to="/signup" id="signup-home">Sign Up</Link></h1>
                    </div>
                </header>
            // </div>
        )
    }

    return currentUser ? loggedGreet() : sessionLinks();

}