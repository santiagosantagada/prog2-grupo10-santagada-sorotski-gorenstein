const express=require("express")
const router=express.Router()
const productosController= require("../controllers/productosController")
const {body} = require("express-validator");

let validations=[
    body("foto")
      .notEmpty().withMessage("Debe completar este campo").bail(),
    body("nombreProducto")
      .notEmpty().withMessage("Debe completar este campo").bail(),
    body("descripcion")
        .notEmpty().withMessage("Debe completar este campo").bail(),

  ]
  

router.get("/id/:idProducto", productosController.product)
router.get("/productadd", productosController.showFormCreate)
router.post("/productadd", validations, productosController.productadd)
router.get("/searchresults", productosController.searchresults)
router.get("/editproduct/:productoId",  productosController.showformUpdate)
router.post("/editproduct/:productoId", validations, productosController.editproduct)


module.exports= router;