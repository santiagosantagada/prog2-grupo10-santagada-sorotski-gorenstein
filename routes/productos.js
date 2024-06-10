const express=require("express")
const router=express.Router()
const productosController= require("../controllers/productosController")
const {body} = require("express-validator");

router.get("/id/:idProducto", productosController.product)

router.get("/productadd", productosController.showFormCreate)

router.post("/productadd", productosController.productAdd)


router.get("/searchresults", productosController.searchresults)


module.exports= router;