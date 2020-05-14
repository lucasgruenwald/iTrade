import { 
        RECEIVE_HOLDING, FIND_HOLDINGS, GET_POSITION,
    REMOVE_HOLDING, UPDATE_HOLDING
        } from '../actions/holding'

const holdingsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_HOLDING:
            return action.holding
        case REMOVE_HOLDING:
            return action
            //
        case UPDATE_HOLDING:
            return action.holding
        case FIND_HOLDINGS:
            return action.holdings;
        case GET_POSITION:
            return action.holding;
        default: 
            return state;
    }
};

export default holdingsReducer;