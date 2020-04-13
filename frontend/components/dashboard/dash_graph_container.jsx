import {connect} from 'react-redux';
import DashGraph from './dash_graph';
// more imports

const mSTP = (state) => {
    return {
        // currentUser: state.session.currentUser,
        // holdings: state.entities.holdings,
        // receive graph data
    }
};

const mDTP = (dispatch) => {
    // receive graph data 
    return {
    }
};

export default connect(mSTP, mDTP)(DashGraph);