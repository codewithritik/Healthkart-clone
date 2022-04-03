
const express = require("express")

const router = express.Router()

const Flsale =require("../models/flsalemodel.js")


router.post("",async(req,res)=>{
try{
    let user = await Flsale.create(req.body)

    return res.status(200).send(user)
}
catch{
    return res.send(err.message)
}
});


router.get("",async(req,res)=>{
    try{
        let user = await Flsale.find().lean().exec()
    
        return res.status(200).send(user)
    }
    catch{
        return res.send(err.message)
    }
    });



module.exports = router