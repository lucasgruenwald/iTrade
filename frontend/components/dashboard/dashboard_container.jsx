// import React from 'react';
import Dashboard from './dashboard';
import { logoutUser } from '../../actions/session';
import { connect } from 'react-redux';

const mSTP = (state) => {
    return {currentUser: state.session.currentUser}
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(mSTP, mDTP)(Dashboard);