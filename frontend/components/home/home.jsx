import React, { useState } from 'react';
import Modal from 'react-modal'
import { Link } from 'react-router-dom';


function Home (){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
      <div className="home">
        <div className="home-img">
          <div className="home-left-text">
            <h1>It’s Time to Do Money</h1>
            <h3>
              iTrade, a pioneer of commission-free investing, gives you more
              ways to make your money work harder.
            </h3>
            <Link to="/signup" id="body-sign-up-link">
              <button className="body-sign-up">
                  Sign Up
              </button>
            </Link>
          </div>
          {/* <img
            className="home-first-img"
            src="https://cdn.robinhood.com/assets/robinhood/brand_2/2d98ce66a6fc8e2a3e403064eefb81a1-2x.png"
          /> */}
          <div className="home-first-img">
            <video autoPlay loop muted preload="auto" className="video-cont">
              <source
                className="gif-iphone"
                src={window.iphone_vid}
                type="video/mp4"
              />
            </video>
            <div className="iphone-holder">
              <img
                className="iphone-empty"
                src={window.iphone_empty_pic}
                role="presentation"
                draggable="false"
              />
            </div>
          </div>
        </div>
        <div className="break-free">
          <h2>Break Free from Commission Fees</h2>
          <p>
            Make unlimited commission-free stock trades with iTrade Financial.
          </p>

          <button
            onClick={() => setModalIsOpen(true)}
            className="disclosure-button"
          >
            Commissions Disclosure
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="modal-disclosure"
            id="modal-disclosure"
            ariaHideApp={false}
            style={{
              overlay: {
                backgroundColor: "rgba(1,0,0,0.8)",
              },
            }}
          >
            <button
              onClick={() => setModalIsOpen(false)}
              className="close-modal"
            >
              &times;
            </button>
            <div className="modal-title">Commissions Disclosure</div>

            <div className="modal-body">
              <p>
                Commission-free trading means $0 commission trades placed on
                self-directed accounts via mobile devices or web. Keep in mind,
                other fees may still apply. Please see the iTrade Financial
                Fee Schedule to learn more. Thank you for visiting this popup!
              </p>
            </div>
          </Modal>
        </div>

        <div className="marquee"></div>

        <div className="global-section">
          <h1 className="global-title">
            <p>Invest in global companies in a whole new way.</p>
          </h1>
          <div className="global-companies">
            <div className="global-2">
              <h1>No account minimums.</h1>
              <p>Get into the market with as little as $1.</p>
            </div>
            <div className="global-1">
              <h1>No commission or foreign exchange fees.</h1>
              <p>We take care of them—so you don’t have to.</p>
            </div>
            <div className="global-3">
              <h1>No manual needed.</h1>
              <p>Intuitively designed for newcomers and experts alike.</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://www.stupidgag.com/wp-content/uploads/2019/09/wolf-of-wall-street-movie-poster.jpg"
            className="home-temp-img"
          />
        </div>

        <footer>
          <div>
            <p>Website by Luke Gruenwald</p>
            <p>lgruenwald@sbcglobal.net</p>
            <p>(415) 260-4991</p>
          </div>
          <div>
            <a href="https://linkedin.com/in/lucasgruenwald" target="_blank">
              <img
                id="foot-1"
                src="https://img.icons8.com/plasticine/2x/linkedin.png"
              />
            </a>
            <a href="https://github.com/lucasgruenwald" target="_blank">
              <img
                id="foot-2"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
            </a>
          </div>
        </footer>
      </div>
    );};

export default Home;