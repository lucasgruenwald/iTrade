import { connect } from "react-redux";
import StockGraph from "./stock_graph.jsx";
// more imports

const mSTP = (state) => {
  return {
    currentUser: state.session.currentUser,
    holdings: state.entities.holdings,
    // receive graph data
  };
};

const mDTP = (dispatch) => {
  // receive graph data
  return {};
};

export default connect(mSTP, mDTP)(StockGraph);
