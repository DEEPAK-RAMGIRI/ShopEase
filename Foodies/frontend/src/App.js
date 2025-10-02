// src/App.js - CORRECTED

import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Review from "./components/Review";
import Order from "./components/Order";
import Chatbot from "./components/chatbot";
import './styles/global.css';
import CartPage from "./pages/CartPage";
import React, { useState, useEffect } from 'react';
import * as api from './api/api';

function App() {
  const [cart, setCart] = useState({ items: [] });
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartResponse = await api.getCart();
        const productResponse = await api.getProducts();
        setProducts(productResponse.data)
        setCart(cartResponse.data);
      } catch (err) {
        setError('Failed to fetch the data');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = async (ProductId) => {
    try {
        const response = await api.addToCart(ProductId);
        setCart(response.data);
    } catch (err) {
        console.error("Failed to add item to cart:", err);
    }
  };

  const handleDecreaseQuantity = async (ProductId) => {
    try {
        const response = await api.decreaseQuantity(ProductId);
        setCart(response.data);
    } catch (err) {
        console.error("Failed to decrease quantity:", err);
    }
  };

  const handleRemoveFromCart = async (ProductId) => {
    try {
        const response = await api.removeProduct(ProductId);
        setCart(response.data);
    } catch(err) {
        console.error("Failed to remove item:", err);
    }
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={
            <>
              <Home />
              <Menu products={products} handleAddToCart={handleAddToCart} />
              <Review />
              <About />
            </>
        } />
        <Route path="/order" element={<Order cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onIncrease={handleAddToCart}
              onDecrease={handleDecreaseQuantity}
              onRemove={handleRemoveFromCart}
            />
          }
        />
        <Route path="/menu" element={<Menu products={products} handleAddToCart={handleAddToCart} />} />
        
        <Route path="*" element={<h1 style={{ textAlign: "center" }}>404: Page Not Found</h1>} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;
