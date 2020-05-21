import DashStock from './dash_stock'
import { connect } from 'react-redux';
import { receiveInfo } from '../../actions/stock';
// import { receiveHolding, findHoldings } from '../../actions/holding';


const mSTP = (state, ownProps) => ({
    // ticker: ownProps.match.params.ticker,
    // currentUser: state.entities.users[state.session.id],
    // info: state.entities.stockInfo,
    // holdings: state.entities.holdings
})

const mDTP = (dispatch) => {

    return {
        receiveInfo: (ticker) => dispatch(receiveInfo(ticker)),
        // receiveHolding: (holding) => dispatch(receiveHolding(holding)),
        // findHoldings: (user_id) => dispatch(findHoldings(user_id))
    }
}

export default connect(mSTP, mDTP)(DashStock);