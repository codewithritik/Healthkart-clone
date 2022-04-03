
const express = require("express")

const app = express()

const Productcontroller =  require("./controller/productcontroller")
const flsalecontroller =  require("./controller/flsalecontroller")
const cors = require('cors')
const passport =  require("./configs/googleserver")
const signup = require("./controller/signauth")
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json())

app.use("/product", Productcontroller)

app.use("/flsale", flsalecontroller)


app.use("/signup", signup)
//google auth starteed
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));
  
  
  const genratetoken = (user)=>{
      return jwt.sign({user}, "googlepassword")
  }
  
  
  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login', session:false}),
    function(req, res) {
      // Successful authentication, redirect home.
      const token = genratetoken(req.user)
     
        // window.location.href = "../../Forntend/index.html"
      // "http://127.0.0.1:5500/Frontend/index.html"
      res.redirect("http://127.0.0.1:5500/index.html");
      
    });
  
  
  

module.exports = app