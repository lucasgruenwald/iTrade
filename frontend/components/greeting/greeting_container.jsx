import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/session';
import { Greeting } from './greeting';


const mSTP = (state) => {
    // let userId = state.session.id;
    // return { currentUser: state.entities.users[state.session.currentUser] }
    return { currentUser: state.entities.users[state.session.id] }
}
// above is part of issue keeping track of currentUser 

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(mSTP, mDTP)(Greeting);
