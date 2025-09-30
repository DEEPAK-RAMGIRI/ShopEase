import axios from 'axios'

const api = axios.create({
        baseUrl : 'http://localhost:3000/api',
});

export default api;
export const getProoducts = () => api.get('/cart');
export const addToCart = (productId) => api.post('/cart',{productId});
export const decreaseQuantity = (productId) => api.post('/cart/decrease',{ productId});
export const removeProduct = (productId) => api.post(`/cart/${productId}`);
