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
          iTrade, a pioneer of commission-free investing, gives you more ways to
          make your money work harder.
        </h3>
        <button className="body-sign-up">
          <Link to="/signup" id="body-sign-up-link">
            Sign Up
          </Link>
        </button>
      </div>
      <img
        className="home-first-img"
        src="https://cdn.robinhood.com/assets/robinhood/brand_2/2d98ce66a6fc8e2a3e403064eefb81a1-2x.png"
      />
    </div>
    <div className="break-free">
      <h2>Break Free from Commission Fees</h2>
      <p>Make unlimited commission-free stock trades with iTrade Financial.</p>

      <button onClick={() => setModalIsOpen(true)} className="disclosure-button">
        Commissions Disclosure
      </button>

      <Modal
        isOpen={modalIsOpen}
        className="modal-disclosure"
        id="modal-disclosure"
        ariaHideApp = { false }
      >

        <button onClick={() => setModalIsOpen(false)} className="close-modal">&times;</button>
        <div className="modal-title">Commissions Disclosure</div>

        <div className="modal-body">
          <p>
            Commission-free trading means $0 commission trades placed on
            self-directed accounts via mobile devices or web. Keep in mind,
            other fees may still apply. Please see the Robinhood Financial Fee
            Schedule to learn more.
          </p>
        </div>

      </Modal>
    </div>
        
    <div className="marquee"></div>
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
      <img
        src="https://www.stupidgag.com/wp-content/uploads/2019/09/wolf-of-wall-street-movie-poster.jpg"
        className="home-temp-img"
      />
    </div>
  </div>
)};

export default Home;