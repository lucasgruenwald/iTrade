import { RECEIVE_NEWS } from "../actions/news";

const newsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NEWS:
            return action.news.articles;
        default:
            return state;
    }
}

export default newsReducer;