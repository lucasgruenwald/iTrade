import {
    createHolding, 
    fetchHoldings,
    fetchHolding
} from '../util/holding_api_util.js'

export const RECEIVE_HOLDING = "RECEIVE_HOLDING";
export const FIND_HOLDINGS = "FIND_HOLDINGS";
export const GET_POSITION = "GET_POSITION";

const receiveTheHolding = holding => {
    return {
        type: RECEIVE_HOLDING,
        holding: holding
    };
};

const findTheHoldings = (holdings) => ({
    type: FIND_HOLDINGS,
    holdings: holdings
})

const getThePosition = (holding) => ({
    type: GET_POSITION,
    holding: holding
})

export const receiveHolding = (holding) => dispatch => createHolding(holding)
    .then(holding => dispatch(receiveTheHolding(holding)))

export const findHoldings = (user_id) => dispatch => fetchHoldings(user_id)
    .then(holdings => dispatch(findTheHoldings(holdings)))

export const getPosition = (holding) => dispatch => fetchHolding(holding)
    .then(holding => dispatch(getThePosition(holding)))