import React from 'react';
import { signupUser } from '../../actions/session';
import { connect } from 'react-redux';
import Signup from './signup_form';


function mSTP(state) {
    let errors = Object.values(state.errors);
    let formType = 'Sign Up';
    return { errors, formType }
}

const mDTP = (dispatch) => ({
    signupUser: user => dispatch(signupUser(user))
})

export default connect(mSTP, mDTP)(Signup);

