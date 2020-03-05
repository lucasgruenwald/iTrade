import React from 'react';
import { connect } from 'react-redux';

import { logoutCurrentUser } from '../../actions/session';
import { Greeting } from './greeting';


const mSTP = (state) => {
    let userId = state.session.id;
    return { currentUser: state.entities.users[userId] }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutCurrentUser())
})

export default connect(mSTP, mDTP)(Greeting);