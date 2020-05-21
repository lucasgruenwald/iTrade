// import React from 'react';
import FirstSignup from './first_signup';
import { receiveHolding } from '../../actions/holding';
import { connect } from 'react-redux';


const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
        holdings: state.entities.holdings,
        user: state.entities.users
    }
}

const mDTP = dispatch => ({
    receiveHolding: (holding) => dispatch(receiveHolding(holding)),
})

export default connect(mSTP, mDTP)(FirstSignup);