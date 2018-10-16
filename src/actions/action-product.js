// Import all Action Type
import { FETCH_PRODUCTS, FETCH_PRODUCT_ID, CREATE_PRODUCT } from './action-types';
import { HTTP } from './../service/http';
/**
 * @function fetchProducts
 * @returns {object} - Action Object with type `FETCH_CURRENCY`
 */
const fetchProducts = () => {
  const req = HTTP.get(`/products`);
  return {
    type: FETCH_PRODUCTS,
    payload: req
  }
};
/**
 * @function fetchProductId
 * @param {integer} id - Product Id
 * @returns {object} - Action Object with type `SET_FILTER`
 */
const fetchProductId = (id) => {
  const req = HTTP.get(`/products/${id}`);
  return { 
    type: FETCH_PRODUCT_ID,
    payload: req
  }
}
/**
 * @function createProduct
 * @param {object} product - Product
 */
const createProduct = (product, callback) => {
  const req = HTTP.post('/products', product)
  .then(() => callback());
  return {
    type: CREATE_PRODUCT,
    payload: req
  }
}
// Export All Actions
export {
  fetchProducts,
  fetchProductId,
  createProduct
};