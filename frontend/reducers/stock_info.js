import { RECEIVE_INFO } from '../actions/stock';

const stockInfoReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_INFO:
            return action.info
        default:
            return state;
    }
};

export default stockInfoReducer;