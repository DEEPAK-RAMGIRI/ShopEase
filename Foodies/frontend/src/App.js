import Home from "./components/Home";
// import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Review from "./components/Review";
import Order from "./components/Order";
import Chatbot from "./components/chatbot";
import './styles/global.css';
import React, { useState, useEffect} from 'react';
import * as api from './api/api';

function App() {
  const [cart, setCart] = useState({items : []});
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect ( () => {
    const fetchData = async () => {
      try {
        const cartResponse = await api.getCart();
        const productResponse = await api.getProducts();
        setProducts(productResponse.data)
        setCart(cartResponse.data);
        console.log(productResponse)

      } catch (err) {
        setError('Failed to fetch the data');
        console.error(err);
      }
    }; fetchData();
  },[]);


  const handleAddToCart = async (ProductId,productName) => {
   const response = await api.addToCart(ProductId);
   setCart(response.data);
   alert(`${productName} is added to cart`);
  };


  const handleDecreaseQuantity = async (ProductId) => {
    const response = await api.decreaseQuantity(ProductId);
    setCart(response.data);
  };

  const handleRemoveFromCart = async (ProductId) => {
    const response = await api.removeProduct(ProductId);
    setCart(response.data);
  }

   if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  return (
    <>
    <Navbar cart={cart} />
    <Home/>
    <Menu products={products} handleAddToCart={handleAddToCart}/>
    <About />
    <Review />
    <Order cart ={cart} setCart= {setCart}/>
    <Chatbot /> 

    </>
  );
}

export default App;