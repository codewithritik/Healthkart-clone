const mongoose = require("mongoose")

const ProductSceham = mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:String, required:true}
},{
    versionKey: false,
    timestamp:true

});


module.exports = mongoose.model("product", ProductSceham)