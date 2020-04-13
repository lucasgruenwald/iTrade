import { fetchDay } from "../util/graph_api_util"
// add more from util 

export const RECEIVE_DAY = "RECEIVE_DAY";

const receiveTheDay = prices => ({
    type: RECEIVE_DAY,
    prices
})

export const receiveDay = (ticker) => dispatch => fetchDay(ticker)
    .then(prices => dispatch(receiveTheDay(prices)))

