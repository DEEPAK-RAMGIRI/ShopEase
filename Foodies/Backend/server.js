const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const apiRoutes = require('./routes/api.routes');
const Product = require('./models/Product.model');
const cart = require('./models/cart.model');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI).then(() => console.log("MongoDB Connected Successfully."))
.catch(err => console.error("MongoDb Connection error",err));

app.get('/',(req,res) => { res.send("API Running.")});
app.use('/api',apiRoutes);

async function DataBase() {
    const ProductCount = await product.countDocuments();
    if (ProductCount === 0){
        console.log('No Products Found at the DataBase Inserting defined Ones');
        const products = [
            { name: "Ratatouile", price: 800, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f1.webp"},
            { name: "Lobster Soup", price: 560, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f2.webp"},
            { name: "Crêpes", price: 830, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f3.webp"},
            { name: "Palmiers", price: 499, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f4.webp"},
            { name: "Upma", price: 150, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f5.webp"},
            { name: "Biryani", price: 750, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f6.webp"},
            { name: "Gulab Jamun", price: 1000, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f7.webp"},
            { name: "Palak Panner", price: 560, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f8.webp"},
            { name: "Onigiri", price: 700, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f9.webp"},
            { name: "Tonkatsu", price: 700, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f10.webp"},
            { name: "Ramen", price: 500, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f11.webp"},
            { name: "Udon", price: 580, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f12.webp"},
        ]
        await Product.insertMany(products);
        console.log('added into database');
    }
} 

app.listen(PORT,() => {console.log(`Oi I'am listening from the ${PORT}😊👍`)});