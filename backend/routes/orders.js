const router = require('express').Router();
let Order = require('../models/Order');

// CREATE: Place a new order (from cart)
router.post('/place', async (req, res) => {
    // Expects an object with a 'cartItems' array
    const { cartItems } = req.body; 
    
    try {
        let totalAmount = 0;
        // Calculate total amount and format products for the order schema
        const productsForOrder = cartItems.map(item => {
            totalAmount += item.price * item.quantity;
            return {
                productId: item._id, // Make sure to use _id from the product object
                quantity: item.quantity,
                name: item.name,
                price: item.price
            };
        });

        const newOrder = new Order({
            products: productsForOrder,
            totalAmount,
            status: 'Pending' // Default status
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// READ: Get all orders (order history)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 }); // Show newest first
        res.json(orders);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// UPDATE: Update order status (e.g., to 'Shipped' or 'Delivered')
router.put('/status/:id', async (req, res) => {
    const { status } = req.body; // Expects { "status": "Shipped" }
    const validStatuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];

    if (!validStatuses.includes(status)) {
        return res.status(400).json('Error: Invalid status value.');
    }

    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json('Error: Order not found.');
        }
        
        order.status = status;
        await order.save();
        res.json({ message: 'Order status updated!', order: order });
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// DELETE: Cancel an order
// This is functionally similar to updating the status to 'Cancelled'
router.delete('/cancel/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, 
            { status: 'Cancelled' },
            { new: true } // This option returns the updated document
        );

        if (!updatedOrder) {
            return res.status(404).json('Error: Order not found.');
        }

        res.json({ message: 'Order cancelled.', order: updatedOrder });
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// This line is essential for the file to work correctly
module.exports = router;