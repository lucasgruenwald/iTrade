import {createHolding, fetchHolding} from '../util/holding_api_util.js'

export const RECEIVE_HOLDING = "RECEIVE_HOLDING";
export const FIND_HOLDING = "FIND_HOLDING";

const receiveTheHolding = holding => {
    return {
        type: RECEIVE_HOLDING,
        holding: holding
    };
};

const findTheHoldings = (holding) => {
    return {
        type: FIND_HOLDING,
        holding: holding
    }
};

export const receiveHolding = (holding) => dispatch => createHolding(holding)
    .then(holding => dispatch(receiveTheHolding(holding)))


export const findHolding = (holding) => dispatch => fetchHolding(holding)
    .then(holding => dispatch(findTheHoldings(holding)))