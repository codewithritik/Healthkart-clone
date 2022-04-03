const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")
const { v4: uuidv4 } = require('uuid');
const User = require("../models/googlemodel")
passport.use(new GoogleStrategy({
    clientID: `349437089208-kbilmainte1bh91ahfrtvfpm7hhclti2.apps.googleusercontent.com`,
    clientSecret: `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`,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback:true
  },
  async function(resquest,accessToken, refreshToken, profile, cb) {
    const email=profile?._json?.email
      let user;
    user= await User.findOne({email :email}).lean().exec()
    if(!user){
        user = await User.create({
            email:email,
            password : uuidv4(), 
            role : ["customer"]
        })
    }
    console.log(user)
    return cb(null, user);
  }
));

module.exports = passport;