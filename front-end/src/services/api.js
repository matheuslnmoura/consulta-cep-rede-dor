import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL
});
console.log(api.baseURL);
export default api;