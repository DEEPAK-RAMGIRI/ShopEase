
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Cart.css';

function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const navigate = useNavigate();
  const total = cart?.items?.reduce((sum, item) => sum + (item?.productId?.price || 0) * item.quantity, 0) || 0;
  const handleOrderNowClick = () => {
    navigate('/order'); 
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart?.items?.length === 0 ? (
        <p className="empty-cart-message">Your Cart is Empty!</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.items.map(item => (
              item && item.productId && (
                <div key={item.productId._id} className="cart-item">
                  {item.productId.image && (
                    <img
                      src={item.productId.image}
                      alt={item.productId.name}
                      className="product-image"
                    />
                  )}

                  <div className="item-details">
                    <h4>{item.productId.name}</h4>
                    <p>₹{item.productId.price.toFixed(2)}</p>
                  </div>
                  <div className="item-controls">
                    <button onClick={() => onDecrease(item.productId._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.productId._id)}>+</button>
                  </div>
                  <button onClick={() => onRemove(item.productId._id)} className="remove-button">Remove</button>
                </div>
              )
            ))}
          </div>
          <h3 className="cart-total">Total: ₹{total.toFixed(2)}</h3>

          {/* Order Now Button */}
          <button onClick={handleOrderNowClick} className="order-now-button">
            Order Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;