const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/shopEase';

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch(err => console.error("MongoDB connection error:", err));

// --- API Routes ---
// These lines import the router objects from your route files
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

// Tell the app to use the imported routers
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});