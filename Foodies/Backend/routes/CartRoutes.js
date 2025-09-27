const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

router.get('/', async (req, res) => {
  try {
    const cartList = await Cart.find();
    res.json(cartList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    const { foodName, rate, quantity } = req.body; 
    let cartList = await Cart.findOne(); 
    if (!cartList) {
      cartList = new Cart({ items: [] }); 
    }

    const existingItem = cartList.items.find(item => item.foodName === foodName);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartList.items.push({ foodName, rate, quantity });
    }

    await cartList.save();

  } catch (err) {
    console.error("Error adding item:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
