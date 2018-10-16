import _ from "lodash";
import { CREATE_PURCHASE_TOKEN,
  REMOVE_PURCHASE_TOKEN,
  FETCH_PURCHASES,
  GET_PURCHASE_TOKEN } from './../actions/action-types';

const initialState = {
  token: null,
  list: []
}
const initialAction = {
  type: 'DEFAULT'
};
const reducerPurchase = (
  state = initialState,
  action = initialAction) => {
  switch (action.type) {
  case FETCH_PURCHASES:
    const data = action.payload.data
    return {
      ...state,
      list: _.mapKeys(data, '_id')
    }
  case CREATE_PURCHASE_TOKEN:
    return {
      ...state,
      token: action.payload.data
    }
  case REMOVE_PURCHASE_TOKEN:
    return {
      ...state,
      token: null }
  case GET_PURCHASE_TOKEN:
    return {
      ...state,
      token: action.payload.data
    }
  default:
    return state
  }
}

export default reducerPurchase;