import React from 'react';
import axios from 'axios';

function Cart({ cartItems, onRemoveFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handlePlaceOrder = () => {
        const orderDetails = {
            cartItems: cartItems.map(item => ({
                productId: item._id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            }))
        };
        
        axios.post('/api/orders/place', orderDetails)
            .then(response => {
                alert('Order placed successfully!');
                // Here you might want to clear the cart
            })
            .catch(error => console.error("Error placing order:", error));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => onRemoveFromCart(item._id)}>Remove</button>
                        </div>
                    ))}
                    <hr />
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button onClick={handlePlaceOrder}>Place Order</button>
                </div>
            )}
        </div>
    );
}

export default Cart;