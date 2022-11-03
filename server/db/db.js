const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const connection = mongoose.connect(process.env.MONGODB_URI,{

    useUnifiedTopology: true,
    useNewUrlParser: true,
}
).then(()=> {
    console.log("databaseconnected")
})

module.exports=connection 

