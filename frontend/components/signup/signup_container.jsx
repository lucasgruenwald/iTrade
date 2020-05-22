// import React from 'react';
import { signup } from '../../actions/session';
import { login } from '../../actions/session';
import { connect } from 'react-redux';
import Signup from './signup';
// import { receiveHolding } from '../../actions/holding';

const mSTP = (state) => ({
    errors: state.errors.session,
    // currentUser: state.entities.users[state.session.currentUser],
});

const mDTP = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    // receiveHolding: (holding) => dispatch(receiveHolding(holding)),
})

export default connect(mSTP, mDTP)(Signup);

