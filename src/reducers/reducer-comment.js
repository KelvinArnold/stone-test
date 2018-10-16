import { FETCH_CURRENCY, SET_FILTER } from './../actions/action-types';

const initialState = {};
/**
 * @function reducerCurrency
 * @param {object} state - Current currency state
 * @param {object} action - Action to be reduced
 * @returns {object} - New currency state
 */
const reducerCurrency =  (state = initialState, action = {type: 'DEFAULT'}) => {
  switch (action.type) {
  case FETCH_CURRENCY:
    const data = action.payload.data;
    return {
      ...state,
      list: data
    };
  case SET_FILTER:
    return {
      ...state,
      search: action.payload
    }
  default:
    return state
  }
}

export default reducerCurrency;