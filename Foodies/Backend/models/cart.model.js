const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true 
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }]
}, {
    timestamps: true
});
cartSchema.index({ updatedAt: 1 }, { expireAfterSeconds: 259200 });

module.exports = mongoose.model('Cart', cartSchema);
