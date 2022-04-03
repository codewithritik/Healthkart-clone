const mongoose = require("mongoose")

const Falesceham = mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:String, required:true}
},{
    versionKey: false,
    timestamp:true

});


module.exports = mongoose.model("Flsaledata", Falesceham)