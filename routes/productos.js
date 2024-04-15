const express=require("express")
const router=express.router
const productosController= require("../controllers/productosController")

router.get("/", productosController.index)


module.exports=router;