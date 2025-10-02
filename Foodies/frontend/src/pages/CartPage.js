import React from 'react';
import Cart from '../components/Cart'
function CartPage({ cart, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="page-container">
      <Cart
        cart={cart}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
      />
    </div>
  );
}

export default CartPage;