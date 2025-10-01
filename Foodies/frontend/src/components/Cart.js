import React from 'react';

function Cart({cart,onIncrease,onDecrease,onRemove}) {

  const total = cart.items.reduce((sum , item) => sum + item.productId.price * item.quantity,0)

  return(
    <div>
      <h1> Cart </h1>
      {cart.items.length === 0} ? (
        <p> your Cart is Empty Dude!</p>
      ) : (
        <>
          {cart.items.map(item => (
              <div key={item.productId._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                  <div style={{ flex: 1 }}>
                      <h4>{item.productId.name}</h4>
                      <p>${item.productId.price.toFixed(2)}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button onClick={() => onDecrease(item.productId._id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onIncrease(item.productId._id)}>+</button>
                  </div>
                  <button onClick={() => onRemove(item.productId._id)} style={{ marginLeft: '1rem', background: '#ff4d4d', color: 'white' }}>Remove</button>
              </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )
    </div>
  );
}

export default Cart;
