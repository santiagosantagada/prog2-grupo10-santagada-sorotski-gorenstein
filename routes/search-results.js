const express=require("express")
const router=express.router
const searchresultsController= require("../controllers/search-results")

router.get("/", searchresultsController.index)


module.exports=router;