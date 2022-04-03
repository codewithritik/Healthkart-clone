const mongoose = require("mongoose");


const googleSchema =  new mongoose.Schema({
    // name: {type : String, required : true, },
    email : {type : String, required : true, unique:true},
    password : {type : String, required : true},
    role : [{type : String}]
},{
    timestamps : true,
    versionKey : false,
});


const User = mongoose.model("user", googleSchema)


module.exports = User
