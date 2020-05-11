import {
    createHolding, 
    fetchHoldings,
    findPosition,
    updateCashPos,
    deleteHolding, 
    editHolding
} from '../util/holding_api_util.js'

export const RECEIVE_HOLDING = "RECEIVE_HOLDING";
export const REMOVE_HOLDING = "REMOVE_HOLDING"
export const UPDATE_HOLDING = "UPDATE_HOLDING"
export const FIND_HOLDINGS = "FIND_HOLDINGS";
export const GET_POSITION = "GET_POSITION";
export const UPDATE_CASH = "UPDATE_CASH";

const receiveTheHolding = holding => ({
    type: RECEIVE_HOLDING,
    holding
});

const removeTheHolding = holding => ({
    type: REMOVE_HOLDING,
    holding
})

const updateTheHolding = holding => ({
    type: UPDATE_HOLDING,
    holding
})

const findTheHoldings = (holdings) => ({
    type: FIND_HOLDINGS,
    holdings
})

const getThePosition = (holding) => ({
    type: GET_POSITION,
    holding
})

const receiveTheCash = (newCash) => ({
    type: UPDATE_CASH,
    newCash
})

export const receiveHolding = (holding) => dispatch => createHolding(holding)
    .then(holding => dispatch(receiveTheHolding(holding)))

export const removeHolding = (holding) => dispatch => deleteHolding(holding)
    .then(holding => dispatch(removeTheHolding(holding)))

export const updateHolding = (holding) => dispatch => editHolding(holding)
    .then(holding => dispatch(updateTheHolding(holding)))

export const findHoldings = (user_id) => dispatch => fetchHoldings(user_id)
    .then(holdings => dispatch(findTheHoldings(holdings)))

export const getPosition = (holding) => dispatch => findPosition(holding)
    .then(holding => dispatch(getThePosition(holding)))

export const updateCash = (newCash) => dispatch => updateCashPos(newCash)
    .then(newCash => dispatch(receiveTheCash(newCash)));
