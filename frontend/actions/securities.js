import {
    fetchNYSE,
    fetchNasdaq
} from "../util/securities_api_util";

export const RECEIVE_STOCKS = "RECEIVE_STOCKS";

const receiveTheStocks = (stocks) => ({
    type: RECEIVE_STOCKS,
    stocks
});

export const receiveStocks = () => dispatch => Promise.all([fetchNYSE(), fetchNasdaq()])
    .then(stocks => dispatch(receiveTheStocks(stocks.flat())));