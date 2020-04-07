import { connect } from 'react-redux';
import { receiveStocks } from '../../actions/securities';
import SearchBar from './search';

const mapStateToProps = state => ({
    stocks: state.entities.stocks
})

const mapDispatchToProps = dispatch => ({
    receiveStocks: () => dispatch(receiveStocks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);