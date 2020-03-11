import { RECEIVE_HOLDING, FIND_HOLDING} from '../actions/holding'

export const holdingsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_HOLDING:
            return Object.assign({}, state, { [action.holding.id]: action.holding });
        case FIND_HOLDING:
            return action.holdings;
        default: 
    }
};