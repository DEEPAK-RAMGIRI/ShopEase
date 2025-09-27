import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Review from "./components/Review";
import Order from "./components/Order";
import Chatbot from "./components/chatbot";
import './styles/global.css';
import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = async (item, price) => {
    try{
      const response = await axios.post("http://localhost:3000/api/cart/add",{foodname:item,rate:price,quantity:1});
      setCart([...cart, { item, price }]);
      alert(`${item} has been added to your cart.`);
      console.log("Cart in DB",response.data) 
    }catch(err){
      console.error("Error adding into the cart:",err);
      alert("failed to add in to the cart")
    }
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
