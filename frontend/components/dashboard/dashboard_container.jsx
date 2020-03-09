import React from 'react';
import Dashboard from './dashboard';
import { logoutUser } from '../../actions/session';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => {
    let userId = state.session.id
    let url = ownProps.match.params

    return {
        currentUser: state.entities.users[userId],
        url: url
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(mSTP, mDTP)(Dashboard);