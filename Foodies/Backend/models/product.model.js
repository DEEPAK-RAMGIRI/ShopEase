const mongoose =  require('mongoose');

const prodctschema = new mongoose.Schema({
    name : {type : String, require : true},
    price: {type: Number, reqire : true},
    image : {type: String, require : true},
    stars: {type:Number,default : 0}
});

module.exports = mongoose.model('Product',prodctschema); 