

const express = require("express")
const router = express.Router();
const User = require("../models/signup")
 



router.post("", async(req, res) => {
    try {
        const register = await User.create(req.body);
        return res.status(201).send(register);
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

router.get("", async(req, res) => {
        try {
            let register = await User.find().lean().exec()
            return res.status(200).send(register);
        } catch (err) {
            return res.status(500).send(err.message)
        }
    })
module.exports = router