import { CREATE_PURCHASE_TOKEN,
  REMOVE_PURCHASE_TOKEN,
  SEND_PURCHASE,
  FETCH_PURCHASES,
  GET_PURCHASE_TOKEN,
  FETCH_PRODUCT_TOKEN } from './action-types';
import { generateToken } from './../helpers';
import { HTTP } from './../service/http';

const createPurchaseToken = (obj, callback) => {
  const token = generateToken();
  const req = HTTP.post('/purchases/token', {
    token,
    productId: obj.product_id,
    productTitle: obj.product_title,
    productPrice: obj.product_price,
    quantity: obj.quantity,
  })
  callback(token);
  return {
    type: CREATE_PURCHASE_TOKEN,
    payload: req
  }
}

const fetchToken = (token) => {
  const req = HTTP.get(`/purchases/token/${token}`);
  return {
    type: GET_PURCHASE_TOKEN,
    payload: req
  }
}

const fetchProductToken = (id) => {
  const req = HTTP.get(`/products/${id}`);
  return { 
    type: FETCH_PRODUCT_TOKEN,
    payload: req
  }
}

const removePurchaseToken = (token) => {
  const req = HTTP.delete(`/purchases/token/${token}`)
  return {
    type: REMOVE_PURCHASE_TOKEN,
    payload: req
  }
}

const sendPruchase = (purchase, callback, errorMessage) => {
  const req = HTTP.post('/purchases', purchase)
  .then(() => callback())
  .catch((err) => errorMessage(err));
  return {
    type: SEND_PURCHASE,
    payload: req
  }
}

const fetchPurchase = () => {
  const req = HTTP.get('/purchases');
  return {
    type: FETCH_PURCHASES,
    payload: req
  }
}

export {
  createPurchaseToken,
  fetchToken,
  fetchProductToken,
  removePurchaseToken,
  fetchPurchase,
  sendPruchase
}