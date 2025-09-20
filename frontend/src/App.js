import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    // Add product to cart
    const handleAddToCart = (product) => {
        const exist = cartItems.find((x) => x._id === product._id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x._id === product._id ? { ...exist, quantity: exist.quantity + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Remove product from cart
    const handleRemoveFromCart = (productId) => {
        const exist = cartItems.find((x) => x._id === productId);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x._id !== productId));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x._id === productId ? { ...exist, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };


    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Products</Link> | <Link to="/cart">Cart ({cartItems.reduce((a, c) => a + c.quantity, 0)})</Link> | <Link to="/orders">Order History</Link> | <Link to="/admin">Admin</Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
                        <Route path="/orders" element={<OrderHistory />} />
                        <Route path="/admin" element={<AdminPanel />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;