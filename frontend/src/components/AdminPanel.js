import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: '', description: '', price: '', imageUrl: '', stock: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/api/products/add', form)
            .then(() => {
                fetchProducts();
                setForm({ name: '', description: '', price: '', imageUrl: '', stock: '' });
                alert('Product added!');
            })
            .catch(err => console.error(err));
    };

    const deleteProduct = id => {
        axios.delete(`/api/products/${id}`)
            .then(() => {
                fetchProducts();
                alert('Product deleted!');
            })
            .catch(err => console.error(err));
    };
    
    return (
        <div>
            <h2>Admin Panel - Manage Products</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                <h3>Add New Product</h3>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
                <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" required />
                <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" required />
                <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" type="number" required />
                <button type="submit">Add Product</button>
            </form>
            
            <h3>Existing Products</h3>
            {products.map(product => (
                <div key={product._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                    <span>{product.name}</span>
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AdminPanel;