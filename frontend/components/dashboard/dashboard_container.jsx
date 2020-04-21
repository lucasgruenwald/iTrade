// import React from 'react';
import Dashboard from './dashboard';
import { logoutUser } from '../../actions/session';
import { receiveHolding, findHoldings } from '../../actions/holding';
import { receiveInfo } from '../../actions/stock';
import { connect } from 'react-redux';
import { receiveStocks, receiveCurrentPrice } from '../../actions/securities';
import { receiveNews } from '../../actions/news'

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
        holdings: state.entities.holdings,
        stocks: state.entities.stocks,
        news: state.entities.news,
        price: state.entities.price,
        user: state.entities.users
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    receiveInfo: (ticker) => dispatch(receiveInfo(ticker)),
    receiveHolding: (holding) => dispatch(receiveHolding(holding)),
    findHoldings: (user_id) => dispatch(findHoldings(user_id)),
    receiveCurrentPrice: (ticker) => dispatch(receiveCurrentPrice(ticker)),
    receiveNews: () => dispatch(receiveNews()),
    receiveStocks: () => dispatch(receiveStocks()),
})

export default connect(mSTP, mDTP)(Dashboard);