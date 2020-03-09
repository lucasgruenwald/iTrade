import React from 'react';
import { connect } from 'react-redux';

import { logoutCurrentUser } from '../../actions/session';
import { Greeting } from './greeting';


const mSTP = (state) => {
    // let userId = state.session.id;
    return { currentUser: state.entities.users[state.session.currentUser] }
}
// above is part of issue keeping track of currentUser 

const mDTP = dispatch => ({
    logout: () => dispatch(logoutCurrentUser())
})

export default connect(mSTP, mDTP)(Greeting);