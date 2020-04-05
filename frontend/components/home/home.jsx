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
            <p>Make unlimited commission-free stock trades with iTrade Financial.</p>
            <p><Link to="/" id="com-disclosure">Commissions Disclosure</Link></p>
            {/* <button id="com-disclosure">Commissions Disclosure</button> */}

            <div class="modal-disclosure">
                <button class="close-modal">&times;</button>
                <div class="modal-title">Commissions Disclosure
                </div>
               
                <div class="modal-body">
                    <p>Commission-free trading means $0 commission trades placed 
                        on self-directed accounts via mobile devices or web. Keep 
                        in mind, other fees may still apply. Please see the 
                        Robinhood Financial Fee Schedule to learn more.
                    </p>
                </div>

            </div>
        </div>

        <div id="modal-overlay"></div>

        <div className="marquee">
        </div>
       
        <div className="global-section">
            <h1 className="global-title">
                <p>Invest in global companies</p>  
                <p>in a whole new way.</p> 
            </h1>

            <div className="global-companies">
                <div className="global-1">
                    <p></p>
                </div>
                <div className="global-2">
                    <p></p>
                </div>
                <div className="global-3">
                    <p></p>
                </div>
            </div>
        </div>

        <div>
            <img src="https://www.stupidgag.com/wp-content/uploads/2019/09/wolf-of-wall-street-movie-poster.jpg" className="home-temp-img"/>
        </div>


    </div>
)