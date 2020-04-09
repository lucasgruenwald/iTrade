import { combineReducers } from "redux";
import usersReducer from "./users";
import stockInfoReducer from "./stock_info";
import holdingsReducer from './holdings';
import securitiesReducer from './securities';

const entitiesReducer = combineReducers({
    users: usersReducer,
    stockInfo: stockInfoReducer,
    holdings: holdingsReducer,
    stocks: securitiesReducer
});

export default entitiesReducer;


