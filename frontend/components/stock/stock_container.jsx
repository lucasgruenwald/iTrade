import StockPage from './stock_page'
import { connect } from 'react-redux';
import { fetchStockProfile } from '../../util/stock_show_util';
// import { stock } from '../../actions/stock';


function mSTP(state) {
    
    
}

const mDTP = (dispatch) => ({
   fetchStockProfile: ticker => dispatch(fetchStockProfile(ticker)),
})

export default connect(mSTP, mDTP)(StockPage);
