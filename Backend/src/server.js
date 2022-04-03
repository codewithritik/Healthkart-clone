const app = require("./index")

const connect = require("./configs/db.js")


app.listen(5000, async(req,res)=>{
    try{
 connect()
 console.log("listen on port 5000")
}
    catch(err){
    return (err.message)
}

});