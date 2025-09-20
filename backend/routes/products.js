const router = require('express').Router();
let Product = require('../models/Product');

// READ: Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/add', async (req, res) => {
    const { name, description, price, imageUrl, stock } = req.body;
    try {
        const newProduct = new Product({ name, description, price: Number(price), imageUrl, stock: Number(stock) });
        await newProduct.save();
        res.status(201).json('Product added!'); // Use 201 for resource creation
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// ... (other product routes like update and delete) ...

// This line is essential for a route file
module.exports = router;