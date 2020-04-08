import { RECEIVE_STOCKS } from "../actions/securities";

export const securitiesReducer = (state = ["hello"], action) => {
    Object.freeze(state);
    let obj = {}
    switch (action.type) {
        case RECEIVE_STOCKS:
            action.stocks.map(stock => obj[stock.symbol] = stock);
            return obj;
        default:
            return state;
    }
}

