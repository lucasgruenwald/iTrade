// import React from 'react';
import { signup } from '../../actions/session';
import { login } from '../../actions/session';
import { connect } from 'react-redux';
import Signup from './signup';


function mSTP(state) {
    let errors = Object.values(state.errors);
    let formType = 'Sign Up';
    return { errors, formType }
}

const mDTP = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(Signup);

