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

let comentarioValidations =[
    body("textoComentario")
    .notEmpty().withMessage("Debe completar este campo").bail()
    .isLength({min: 3}).withMessage("El comentario debe tener al menos 3 caracteres")
]

router.get("/id/:idProducto", productosController.product)
router.post("/id/:idProducto", comentarioValidations, productosController.comentario)

router.get("/productadd", productosController.showFormCreate)
router.post("/productadd", validations, productosController.productadd)

router.get("/searchresults", productosController.searchresults)

router.get("/editproduct/:productoId",  productosController.showformUpdate)
router.post("/editproduct/:productoId", validations, productosController.editproduct)

router.get("/delete/:productoId", productosController.delete)


module.exports= router;