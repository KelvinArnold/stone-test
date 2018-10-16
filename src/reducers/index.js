import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Import all reducers here
import productsReducer from './reducer-product';
import purchaseReducer from './reducer-purchase';

const appReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  purchase: purchaseReducer
})

export default appReducer;