import StockPage from './stock_page'
import { connect } from 'react-redux';
import { receiveInfo } from '../../actions/stock';
import { receiveHolding, findHoldings } from '../../actions/holding';
import { receiveOneNews } from '../../actions/news';


const mSTP = (state, ownProps) => ({
    ticker: ownProps.match.params.ticker,
    // currentUser: state.entities.users[state.session.id],
    currentUser: state.session.currentUser,
    info: state.entities.stockInfo,
    holdings: state.entities.holdings,
    news: state.entities.news,
    user: state.entities.users,
    holdings: state.entities.holdings
})

const mDTP = (dispatch) => {

    return {
        receiveInfo: (ticker) => dispatch(receiveInfo(ticker)),
        receiveHolding: (holding) => dispatch(receiveHolding(holding)),
        findHoldings: (user_id) => dispatch(findHoldings(user_id)),
        receiveOneNews: (ticker) => dispatch(receiveOneNews(ticker))
    }
}

export default connect(mSTP, mDTP)(StockPage);

