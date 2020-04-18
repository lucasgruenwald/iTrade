import { RECEIVE_CURRENT } from '../actions/securities';

const currentPriceReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT:
            nextState[action.price.ticker] = action.price;
            let filter = Object.values(nextState)
            if (filter.pairs) {
                const pairs = filter.pairs.concat(filter.pairs);
                return {
                    pairs
                };
            } else {
                return filter;
            }
        default:
            return state;
    };
};

export default currentPriceReducer;
