import { RECEIVE_NEWS, RECEIVE_ONE_NEWS } from "../actions/news";

const newsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NEWS:
            return action.news.articles;
        case RECEIVE_ONE_NEWS:
            return action.news.articles;
        default:
            return state;
    }
}

export default newsReducer;