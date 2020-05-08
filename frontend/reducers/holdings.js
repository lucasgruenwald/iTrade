import { RECEIVE_HOLDING, FIND_HOLDINGS, GET_POSITION} from '../actions/holding'

const holdingsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
   
    switch(action.type){
        case RECEIVE_HOLDING:
            nextState[Object.keys(action.holding.id)] = action.holding
            return nextState
        // case FIND_HOLDING:
        //     return Object.assign(nextState, { [action.holding.id]: action.holding });
        case FIND_HOLDINGS:
            return action.holdings;
        case GET_POSITION:
            return action.holding;
        default: 
            return state;
    }
};

export default holdingsReducer;