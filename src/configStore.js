import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import appReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default createStoreWithMiddleware(appReducer);
