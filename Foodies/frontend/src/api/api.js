import axios from 'axios'

const API_BASE_URL =  process.env.REACT_APP_API_URL;
const PORT = process.env.PORT;

const api = axios.create({
  baseURL: API_BASE_URL ? `${API_BASE_URL}/api` : `http://localhost:${PORT}/api`,
});

export default api;
export const getProducts = () => api.get('/products');
export const getCart = () => api.get('/cart');
export const addToCart = (productId) => api.post('/cart',{productId});
export const decreaseQuantity = (productId) => api.post('/cart/decrease',{ productId});
export const removeProduct = (productId) => api.delete(`/cart/${productId}`);
