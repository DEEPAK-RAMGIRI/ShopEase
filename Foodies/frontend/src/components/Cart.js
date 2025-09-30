import React from "react";
import axios from "axios";

const Cart = ({ cart, setCart }) => {
  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/cart");
      setCart(response.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };


  const handleIncrease = async (foodName) => {
    try {
      const item = cart.find(i => i.foodName === foodName);
      await axios.post("http://localhost:3000/api/cart/add", {
        foodName,
        rate: item.rate,
        quantity: 1,
      });
      fetchCart();
    } catch (err) {
      console.error("Error increasing quantity:", err);
    }
  };

  const handleDecrease = async (foodName) => {
    try {
      await axios.put(`http://localhost:3000/api/cart/decrease/${foodName}`);
      fetchCart();
    } catch (err) {
      console.error("Error decreasing quantity:", err);
    }
  };

  const handleRemove = async (foodName) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/remove/${foodName}`);
      fetchCart();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const total = cart?.reduce((acc, item) => acc + item.rate * item.quantity, 0) || 0;

  if (!cart || cart.length === 0) {
    return <div className="cart">Your cart is empty 🛒</div>;
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "20px" }}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.foodName} style={{ marginBottom: "10px" }}>
            {item.foodName} - ₹{item.rate} x {item.quantity}{" "}
            <button style={{ marginLeft: "5px" }} onClick={() => handleIncrease(item.foodName)}>+</button>
            <button style={{ marginLeft: "5px" }} onClick={() => handleDecrease(item.foodName)}>-</button>
            <button style={{ marginLeft: "5px" }} onClick={() => handleRemove(item.foodName)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
