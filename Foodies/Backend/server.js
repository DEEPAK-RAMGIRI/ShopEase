const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

const Product = require('./models/Product.model');
const apiRoutes = require('./routes/api.routes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI).then(() => {console.log("MongoDB Connected Successfully."),DataBase(    )})
.catch(err => console.error("MongoDb Connection error",err));

app.get('/',(req,res) => { res.send("API Running.")});
app.use('/api',apiRoutes);

async function DataBase() {
    const ProductCount = await Product.countDocuments();
    if (ProductCount === 0){
        console.log('No Products Found at the DataBase Inserting defined Ones');
        const products = [
            { name: "Ratatouile", price: 800, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f1.webp", stars: 5},
            { name: "Lobster Soup", price: 560, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f2.webp", stars: 4.5 },
            { name: "Crêpes", price: 830, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f3.webp", stars: 5 },
            { name: "Palmiers", price: 499, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f4.webp",stars: 4.5},
            { name: "Upma", price: 150, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f5.webp", stars: 4.5},
            { name: "Biryani", price: 750, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f6.webp", stars: 4.5},
            { name: "Gulab Jamun", price: 1000, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f7.webp", stars: 5},
            { name: "Palak Panner", price: 560, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f8.webp", stars: 5},
            { name: "Onigiri", price: 700, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f9.webp", stars: 4.5},
            { name: "Tonkatsu", price: 700, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f10.webp", stars: 4.5},
            { name: "Ramen", price: 500, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f11.webp", stars: 5},
            { name: "Udon", price: 580, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f12.webp", stars: 5},
        ]
        await Product.insertMany(products);
        console.log('added into database');
    }
} 

app.listen(PORT,() => {console.log(`Oi I'am listening from the ${PORT}😊👍`)});