const express=require("express")
const router=express.Router()
const productosController= require("../controllers/productosController")

router.get("/productos", productosController.productos)
router.get("/productadd",productosController.productAdd)  
router.get("/searchresults", productosController.searchresults)


module.exports= router;