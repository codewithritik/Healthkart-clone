
const express = require("express")

const router = express.Router()

const Product =require("../models/productmodel")


router.post("",async(req,res)=>{
try{
    let user = await Product.create(req.body)

    return res.status(200).send(user)
}
catch{
    return res.send(err.message)
}
});


router.get("",async(req,res)=>{
    try{
        let user = await Product.find().lean().exec()
    
        return res.status(200).send(user)
    }
    catch{
        return res.send(err.message)
    }
    });



module.exports = router