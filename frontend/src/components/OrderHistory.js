import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderHistory() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error("Error fetching orders:", error));
    }, []);

    const cancelOrder = (orderId) => {
        axios.delete(`/api/orders/cancel/${orderId}`)
            .then(() => {
                // Refresh orders or update state
                setOrders(orders.map(o => o._id === orderId ? { ...o, status: 'Cancelled' } : o));
                alert('Order cancelled.');
            })
            .catch(error => console.error('Error cancelling order:', error));
    };

    return (
        <div>
            <h2>Order History</h2>
            {orders.map(order => (
                <div key={order._id} style={{ border: '1px solid #ddd', padding: '15px', margin: '15px 0' }}>
                    <h4>Order ID: {order._id}</h4>
                    <p>Status: <strong>{order.status}</strong></p>
                    <p>Total: ${order.totalAmount.toFixed(2)}</p>
                    <h5>Items:</h5>
                    <ul>
                        {order.products.map(item => (
                            <li key={item.productId}>{item.name} (x{item.quantity}) - ${item.price.toFixed(2)} each</li>
                        ))}
                    </ul>
                    {order.status === 'Pending' && (
                         <button onClick={() => cancelOrder(order._id)}>Cancel Order</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default OrderHistory;