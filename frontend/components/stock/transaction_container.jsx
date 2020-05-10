import { connect } from 'react-redux';
import TransactionForm from './transaction';
import { receiveHolding, updateCash } from '../../actions/holding';

// import { receiveHolding, findHoldings, getPosition, receiveCash } from '../../actions/holding';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUser],
    email: state.entities.users[state.session.currentUser].email,
    holdings: state.entities.holdings,
    user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    receiveHolding: (holding) => dispatch(receiveHolding(holding)),
    updateCash: (newCash) => dispatch(updateCash(newCash)),
    // add deleteHolding
    // findHoldings: (user_id) => dispatch(findHoldings(user_id)),
    // getPosition: (positionKey) => dispatch(getPosition(positionKey)),
    // receiveCash: (submitData) => dispatch(receiveCash(submitData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);