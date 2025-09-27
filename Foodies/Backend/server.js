const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI).then(() => console.log("MongoDB Connected Successfully."))
.catch(err => console.error("MongoDb Connection error",err));

app.get('/',(req,res) => { res.send("API Running.")});

const cartRoutes = require("./routes/CartRoutes");
app.use("/api/cart", cartRoutes);

app.listen(PORT,() => {console.log(`Oi I'am listening from the ${PORT}😊👍`)});