const express = require('express');
const router = express.Router();

const Product = require('../models/Product.model');
const Cart = require('../models/cart.model');

router.get('/products', async(req,res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message : error.message})
    }

});

router.get('/cart', async(req,res) => {
    try{
        const cart = await Cart.findOne().populate('items.productId');
        if(!cart){
            const newCart = new Cart({items : []});
            await newCart.save();
            return res.json(newCart);
        }
        res.json(cart);
    }catch(err){
        res.status(500).json({message : err.message});
    }
});


router.post('/cart',async(req,res) => {
    const {productId} = req.body;
    try {
        let cart = await Cart.findOne();

        if (!cart) cart = new Cart({items : []});

        const itemIndex = cart.items.findIndex(item => item.productId.toString() == productId )

        if(itemIndex > -1){
            cart.items[itemIndex].quantity += 1;
        }else{
            cart.items.push({productId : productId,quantity:1})
        }

        await cart.save();

        const populatedCart = await cart.populate('items.productId');
        res.json(populatedCart);
    }catch(err){
        res.status(500).json({message : err.message});
    } 
});

router.post('/cart/decrease', async (req,res) => {
    const {productId} = req.body;

    try {
        let cart = await Cart.findOne();
        if (!cart) return res.status(500).json({message : "cart cannot found"});
        const itemIndex = cart.items.findIndex(item => item.productId.toString() == productId); 
        if (itemIndex === -1) return res.status(404).json({ message: "Item not found in cart" });
        if (cart.items[itemIndex].quantity > 1){
            cart.items[itemIndex].quantity-=1;
        }else{
            cart.items.splice(itemIndex ,1);
        }
        
        await cart.save();
        const populatedCart = await cart.populate('items.productId')
        res.json(populatedCart);
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})


router.delete('/cart/:productId',async (req,res)=>{
    const { productId } = req.params;
    try{
        let cart = await Cart.findOne();
        if (!cart) return res.status(404).json({message : "cart not found"});
        cart.items = cart.items.filter(item => item.productId.toString() !== productId) ;
        await cart.save();

        const populatedCart = await cart.populate('items.productId');
        res.json(populatedCart)
    }catch(err){
        res.status(500).json({message:err.message});
    }
});


module.exports = router;