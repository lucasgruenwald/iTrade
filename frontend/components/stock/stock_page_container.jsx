import StockPage from './stock_page'
import { connect } from 'react-redux';
import { receiveInfo } from '../../actions/stock';
import { getPosition } from '../../actions/holding';
import { receiveOneNews } from '../../actions/news';


const mSTP = (state, ownProps) => ({
    ticker: ownProps.match.params.ticker,
    currentUser: state.session.currentUser,
    info: state.entities.stockInfo,
    holdings: state.entities.holdings,
    news: state.entities.news,
    user: state.entities.users,
    stocks: state.entities.stocks
})

const mDTP = (dispatch) => {

    return {
        receiveInfo: (ticker) => dispatch(receiveInfo(ticker)),
        getPosition: (holding) => dispatch(getPosition(holding)),
        receiveOneNews: (ticker) => dispatch(receiveOneNews(ticker))
    }
}

export default connect(mSTP, mDTP)(StockPage);

