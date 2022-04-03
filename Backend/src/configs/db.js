const  mongoose  = require("mongoose")


const connect = ()=>{
    return mongoose.connect(`mongodb+srv://ritik:8505805813@cluster0.w0p4q.mongodb.net/healthkart?authSource=admin&replicaSet=atlas-11mzy7-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`)
}

module.exports = connect