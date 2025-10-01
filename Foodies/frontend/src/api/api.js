import axios from 'axios'

const api = axios.create({
        baseURL : 'http://localhost:5000/api',
});

export default api;
export const getProducts = () => api.get('/products');
export const getCart = () => api.get('/cart');
export const addToCart = (productId) => api.post('/cart',{productId});
export const decreaseQuantity = (productId) => api.post('/cart/decrease',{ productId});
export const removeProduct = (productId) => api.delete(`/cart/${productId}`);
