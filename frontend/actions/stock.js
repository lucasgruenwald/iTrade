import { fetchInfo } from '../util/stock_show_util';

export const RECEIVE_INFO = 'RECEIVE_INFO';


const receiveTheInfo = info => ({
   type: RECEIVE_INFO,
   info 
})

export const receiveInfo = (ticker) => dispatch => fetchInfo(ticker)
    .then (ticker => dispatch(receiveTheInfo(ticker)))


