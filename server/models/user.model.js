const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    firstName: {
        type:String,
        required:true,
    },
    lastName: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    }, 
    balance: { 
        type:Number,
        required:true,
        default:100,
    }

})

const User=mongoose.model("User",userschema)

module.exports=User