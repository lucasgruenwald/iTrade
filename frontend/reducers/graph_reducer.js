import { RECEIVE_DAY } from "../actions/graph";
// add more time periods

const graphReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DAY:
            return action.prices;
        // add more cases
        default:
            return state;
    }
}

export default graphReducer;
