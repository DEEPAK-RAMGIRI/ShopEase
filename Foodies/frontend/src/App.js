import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Review from "./components/Review";
import Order from "./components/Order";
import Chatbot from "./components/chatbot";
import './styles/global.css';
import React, { useState } from 'react';
import * as api from './api/api';

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (item, price) => {
    setCart([...cart, { item, price }]);
    alert(`${item} has been added to your cart.`);
  };

  return (
    <>
    <Navbar cart={cart} />
    <Home/>
    <Menu handleCart={handleCart}/>
    <About />
    <Review />
    <Order cart ={cart} setCart= {setCart}/>
    <Chatbot /> 

    </>
  );
}

export default App;