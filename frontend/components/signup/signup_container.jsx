// import React from 'react';
import { signup, login, clearSessionErrors } from '../../actions/session';
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
    clearSessionErrors: () => dispatch(clearSessionErrors())
    // receiveHolding: (holding) => dispatch(receiveHolding(holding)),
})

export default connect(mSTP, mDTP)(Signup);

