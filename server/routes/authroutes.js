const {register, login, transaction}=require("../controllers/user.controller")
const express=require("express")
const router=express.Router()
const authorize=require("../middleware/auth")

router.post("/",register)
router.post("/login",login)
router.post("/transaction", authorize, transaction)
module.exports=router

