const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items:
    [
        {
            foodName: {type: String,required:true},
            rate :{type:Number,required:true},
            quantity :{type: Number,default: 1}

        }
    ]},
{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);