const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

async function authorize (req, res, next) {
    const headertoken = req.headers.authorization 
    console.log("headertoken",headertoken)
    if (!headertoken){
        res.status(403).send("no token")
    } else {
        const token=headertoken.split(" ")[1]
        
        jwt.verify(token,"secret", async function (err,decoded){
            if (err){
                res.status(403).send("invalid token")
            } else {
                const user=await User.findById(decoded.id)
                    req.user=user 
                    next() 
            }
        })
    }
}
module.exports=authorize