// import * as API from '../util/stock_show_util';

export const RECEIVE_STOCK_INFO = 'RECEIVE_STOCK_INFO';

export const receiveStockInfo = (ticker, data) => ({
    type: RECEIVE_STOCK_INFO,
    ticker: ticker,
    data: data
})
