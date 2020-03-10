import React from 'react';
import StockPage from './stock_page'
import { connect } from 'react-redux';
import { receiveInfo } from '../../actions/stock';


const mSTP = (state, ownProps) => ({
    ticker: ownProps.match.params.ticker,
    currentUser: state.entities.users[state.session.id],
    info: state.entities.stockInfo 
})

const mDTP = (dispatch) => {

    return {receiveInfo: (ticker) => dispatch(receiveInfo(ticker))
    }
}

export default connect(mSTP, mDTP)(StockPage);

