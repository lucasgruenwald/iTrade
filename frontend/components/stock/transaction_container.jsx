import { connect } from 'react-redux';
import TransactionForm from './transaction';
import { receiveHolding, findHoldings } from '../../actions/holding';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    holdings: state.entities.holdings,
});

const mapDispatchToProps = dispatch => ({
    receiveHolding: (holding) => dispatch(receiveHolding(holding)),
    findHoldings: (user_id) => dispatch(findHoldings(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);