import { RECEIVE_HOLDING, FIND_HOLDINGS} from '../actions/holding'

const holdingsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    // debugger
    switch(action.type){
        case RECEIVE_HOLDING:
            nextState[Object.keys(action.holding.id)] = action.holding
            return nextState
        // case FIND_HOLDING:
        //     return Object.assign(nextState, { [action.holding.id]: action.holding });
        case FIND_HOLDINGS:
            // debugger
            return action.holdings;
        default: 
            return {}
    }
};

export default holdingsReducer;