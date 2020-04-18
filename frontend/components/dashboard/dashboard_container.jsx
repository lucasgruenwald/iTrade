// import React from 'react';
import Dashboard from './dashboard';
import { logoutUser } from '../../actions/session';
import { receiveHolding, findHoldings } from '../../actions/holding';
import { receiveInfo } from '../../actions/stock';
import { connect } from 'react-redux';
import { receiveStocks, receiveCurrent } from '../../actions/securities';
import { receiveNews } from '../../actions/news'

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
        holdings: state.entities.holdings,
        stocks: state.entities.stocks,
        news: state.entities.news,
        prices: state.entities.prices
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    receiveInfo: (ticker) => dispatch(receiveInfo(ticker)),
    receiveHolding: (holding) => dispatch(receiveHolding(holding)),
    findHoldings: (user_id) => dispatch(findHoldings(user_id)),
    receiveStocks: () => dispatch(receiveStocks()),
    receiveCurrent: (ticker) => dispatch(receiveCurrent(ticker)),
    receiveNews: () => dispatch(receiveNews()),
})

export default connect(mSTP, mDTP)(Dashboard);