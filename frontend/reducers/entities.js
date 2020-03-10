import { combineReducers } from "redux";

import usersReducer from "./users";
import stockInfoReducer from "./stock_info";


const entitiesReducer = combineReducers({
    users: usersReducer,
    stockInfo: stockInfoReducer,
});

export default entitiesReducer;


