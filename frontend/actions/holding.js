import {
    createHolding, 
    fetchHoldings
} from '../util/holding_api_util.js'

export const RECEIVE_HOLDING = "RECEIVE_HOLDING";
export const FIND_HOLDINGS = "FIND_HOLDINGS"

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

export const receiveHolding = (holding) => dispatch => createHolding(holding)
    .then(holding => dispatch(receiveTheHolding(holding)))

export const findHoldings = (user_id) => dispatch => fetchHoldings(user_id)
    .then(holdings => dispatch(findTheHoldings(holdings)))



// fetchHolding, 
// export const FIND_HOLDING = "FIND_HOLDING";
// const findTheHolding = (holding) => {
//     return {
//         type: FIND_HOLDING,
//         holding: holding
//     }
// };
// export const findHolding = (holding) => dispatch => fetchHolding(holding)
//     .then(holding => dispatch(findTheHolding(holding)))