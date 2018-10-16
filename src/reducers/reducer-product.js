import _ from "lodash";
import { FETCH_PRODUCTS, FETCH_PRODUCT_ID } from './../actions/action-types';

const initialState = {};
const initialAction = {
  type: 'DEFAULT'
};
const reducerProduct = (
  state=initialState,
  action=initialAction) => {
  switch (action.type) {
  case FETCH_PRODUCTS:
    const data = action.payload.data;
    return _.mapKeys(data, '_id');
  case FETCH_PRODUCT_ID:
    const product = action.payload.data;
    return {
      ...state,
      [product._id]: product
    }
  default:
    return state
  }
}

export default reducerProduct;