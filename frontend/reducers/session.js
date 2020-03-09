
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const _nullSession = {
    currentUser: null, 
    // id: null,
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser.id
            return Object.assign({}, { currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

// const _nullSession = {
//     id: null
// };

// export default (state = _nullSession, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             return Object.assign({}, { id: action.currentUser.id });
//         case LOGOUT_CURRENT_USER:
//             return _nullSession;
//         default:
//             return state;
//     }
// };
