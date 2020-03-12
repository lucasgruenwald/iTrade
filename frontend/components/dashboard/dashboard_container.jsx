// import React from 'react';
import Dashboard from './dashboard';
import { logoutUser } from '../../actions/session';
import { receiveHolding, findHoldings } from '../../actions/holding';
import { receiveInfo } from '../../actions/stock';
import { connect } from 'react-redux';

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
        holdings: state.entities.holdings
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    receiveInfo: (ticker) => dispatch(receiveInfo(ticker)),
    receiveHolding: (holding) => dispatch(receiveHolding(holding)),
    findHoldings: (user_id) => dispatch(findHoldings(user_id))
})

export default connect(mSTP, mDTP)(Dashboard);