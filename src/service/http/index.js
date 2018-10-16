import axios from 'axios';

const API = 'http://localhost:4500/stone/api/';

const config = {
  baseURL: API,
  headers: {
    'Content-Type': 'application/json'
  },
}
// Create new Axios Instance
const HTTP = axios.create(config);
export {
  HTTP
};