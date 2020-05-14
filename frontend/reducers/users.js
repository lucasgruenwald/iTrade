import { RECEIVE_CURRENT_USER } from '../actions/session';
import { UPDATE_CASH } from '../actions/holding';
// import { UPDATE_CASH } from '../actions/holding'

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case UPDATE_CASH:
            return {1: action.newCash}
        // case UPDATE_CASH:
        //     return action.newCash
        default:
            return state;
    }
};

export default usersReducer;