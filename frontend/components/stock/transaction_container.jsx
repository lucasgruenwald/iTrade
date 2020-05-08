import { connect } from 'react-redux';
import TransactionForm from './transaction';
import { receiveHolding, findHoldings, getPosition, receiveCash } from '../../actions/holding';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUser],
    // holdings: state.entities.holdings,
    user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    // receiveHolding: (holding) => dispatch(receiveHolding(holding)),
    // findHoldings: (user_id) => dispatch(findHoldings(user_id)),
    // getPosition: (positionKey) => dispatch(getPosition(positionKey)),
    receiveCash: (submitData) => dispatch(receiveCash(submitData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);