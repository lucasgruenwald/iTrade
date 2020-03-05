import { RECEIVE_CURRENT_USER } from '../actions/session';

const _nullState = [];

const sessionErrorsReducer = (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return _nullState
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, action.errors);
        default:
            return state
    }
}

export default sessionErrorsReducer