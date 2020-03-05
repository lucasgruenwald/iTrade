import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="home">
        {/* <header className="home-header">
            <h1 id="head-1">iTrade</h1>
            <img src="https://images.squarespace-cdn.com/content/53fe4a70e4b0a2293ab0e42a/1409174396100-ZOPXZKUNVM31K4NZHVK0/Robinhood_Glyph_green.png?content-type=image%2Fpng" className="feather-img"/>
            <h1 id="head-2">Products</h1>
            <h1 id="head-3">Learn</h1>
            <h1 id="head-4">Support</h1>
            <div className="header-session">
                <h1><Link to="/login" id="sign-in-home">Log In</Link></h1>
                <h1><Link to="/signup" id="signup-home">Sign Up</Link></h1>
            </div>
        </header> */}

        <div className="home-img">
            <div className="home-left-text">
            <h1>It’s Time to Do Money</h1>
            <h3>iTrade, a pioneer of commission-free investing, gives you more ways to make your money work harder.</h3>
            <button className="body-sign-up"><Link to="/signup" id="body-sign-up-link">Sign Up</Link></button>
            </div>
            <img className="home-first-img" src="https://cdn.robinhood.com/assets/robinhood/brand_2/2d98ce66a6fc8e2a3e403064eefb81a1-2x.png" />
        </div>

        <div className="break-free">
            <h2>Break Free from Commission Fees</h2>
            <p>Make unlimited commission-free stock trades with Robinhood Financial.</p>
            <p><Link to="/" id="com-disclosure">Commissions Disclosure</Link></p>
        </div>
        <img className="home-temp-img" src="https://www.stupidgag.com/wp-content/uploads/2019/09/wolf-of-wall-street-movie-poster.jpg" />
    </div>
)