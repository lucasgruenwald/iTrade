import { combineReducers } from "redux";
import usersReducer from "./users";
import stockInfoReducer from "./stock_info";
import holdingsReducer from './holdings';

const entitiesReducer = combineReducers({
    users: usersReducer,
    stockInfo: stockInfoReducer,
    holdings: holdingsReducer
});

export default entitiesReducer;


