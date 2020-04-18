import {
    fetchNYSE,
    fetchNasdaq,
    fetchCurrentPrice
} from "../util/securities_api_util";

export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_CURRENT = "RECEIVE_CURRENT"

const receiveTheStocks = (stocks) => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveTheCurrentPrice = price => ({
    type: RECEIVE_CURRENT,
    price
});

export const receiveStocks = () => dispatch => Promise.all([fetchNYSE(), fetchNasdaq()])
    .then(stocks => dispatch(receiveTheStocks(stocks.flat())));

export const receiveCurrent = (ticker) => dispatch => fetchCurrentPrice(ticker)
    .then(price => dispatch(receiveTheCurrentPrice(price)));
