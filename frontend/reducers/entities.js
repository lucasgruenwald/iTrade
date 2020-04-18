import { combineReducers } from "redux";
import usersReducer from "./users";
import stockInfoReducer from "./stock_info";
import holdingsReducer from './holdings';
import securitiesReducer from './securities';
import newsReducer from "./news";
import currentPriceReducer from './current_price';

const entitiesReducer = combineReducers({
    users: usersReducer,
    stockInfo: stockInfoReducer,
    holdings: holdingsReducer,
    stocks: securitiesReducer,
    news: newsReducer,
    price: currentPriceReducer
});

export default entitiesReducer;


