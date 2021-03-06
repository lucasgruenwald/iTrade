// import React from 'react';
import { login, clearSessionErrors } from '../../actions/session';
import { connect } from 'react-redux';
import Login from './login';


// function mSTP(state) {
//     let errors = Object.values(state.errors);
//     let formType = 'Log In';
//     return { errors, formType }
// }

const mSTP = (state) => ({
    errors: state.errors.session,
})

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(Login);

