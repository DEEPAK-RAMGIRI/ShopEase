const mongoose =  require('mongoose');

const prodctschema = new mongoose.Schema({
    name : {type : String, require : true},
    price: {type: Number, reqire : true},
    imageurl: {type: String, require : true}
})

module.exports = mongoose.model('Product',prodctschema); 