import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../nav/nav_container'

export const Greeting = ({ currentUser, logout }) => {

    const loggedGreet = () => {
        return (
            <div className="greet-yes">
            <a href="/#/dashboard">
            <img src="https://images.squarespace-cdn.com/content/53fe4a70e4b0a2293ab0e42a/1409174396100-ZOPXZKUNVM31K4NZHVK0/Robinhood_Glyph_green.png?content-type=image%2Fpng" 
            className="feather-img-session" />
            </a>
                <NavBar/>
                <h1 className="dash-button" ><Link to="/dashboard" className="dash-link">Portfolio</Link></h1>
                <h1 className="greet-logout" onClick={logout}><Link to="/" className="logout-link">Log Out</Link></h1>
            </div>
        )
    }

    const sessionLinks = () => {

      
        return (
          // <div className="greet-no">
          <header className="home-header">
            <h1 id="head-1">
              <Link to="/" id="home-link">
                iTrade
              </Link>
            </h1>
            <a
              href="https://i.giphy.com/media/oALtlsKnoRtNS/giphy.webp"
              target="_blank"
            >
              <img
                src="https://images.squarespace-cdn.com/content/53fe4a70e4b0a2293ab0e42a/1409174396100-ZOPXZKUNVM31K4NZHVK0/Robinhood_Glyph_green.png?content-type=image%2Fpng"
                className="feather-img"
              />
            </a>
            <a href="https://github.com/lucasgruenwald" target="_blank">
              <img
                id="head-3"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
            </a>
            <a href="https://linkedin.com/in/lucasgruenwald" target="_blank">
              <img
                id="head-4"
                src="https://img.icons8.com/plasticine/2x/linkedin.png"
              />
            </a>
            <div className="header-session">
              <h1>
                <Link to="/login" id="sign-in-home">
                  Sign In
                </Link>
              </h1>
              <h1>
                <Link to="/signup" id="signup-home">
                  Sign Up
                </Link>
              </h1>
            </div>
          </header>
          // </div>
        );
    }

    return currentUser  ? loggedGreet() : sessionLinks();

}