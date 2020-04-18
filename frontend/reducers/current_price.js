import { RECEIVE_CURRENT } from '../actions/securities';

const currentPriceReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT:
            nextState[action.price.ticker] = action.price;
            return nextState;
        default:
            return state;
    };
};

export default currentPriceReducer;
