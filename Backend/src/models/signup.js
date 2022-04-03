const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        mobile_no: {
            type: Number,
            required: true,
            unique: true
        },
  
    }, {
        timestamps: true,
        versionKey: false
    })
  

module.exports = mongoose.model("signup", userSchema)