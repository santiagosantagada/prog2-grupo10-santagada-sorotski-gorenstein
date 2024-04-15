const express=require("express")
const router=express.router
const profileController= require("../controllers/profileController")

router.get("/", profileController.index)


module.exports=router;