import { connect } from 'react-redux';
import { receiveStocks } from '../../actions/securities';
import Nav from './nav';

const mSTP = state => ({
    stocks: state.entities.stocks
})

const mDTP = dispatch => ({
    receiveStocks: () => dispatch(receiveStocks()),
})

export default connect(mSTP, mDTP)(Nav);