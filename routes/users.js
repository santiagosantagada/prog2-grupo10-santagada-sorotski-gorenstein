var express = require('express');
var router = express.Router();
const usersController= require("../controllers/usersController")
const datos = require("../database/models")


const {body} = require("express-validator");
let validations=[
  body("email")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isEmail().withMessage("Debe escribir un email").bail()
    .custom(function(value){ 
        return datos.Usuario.findOne({
          where: { email: value },
        })
          .then(function(user){
            if(user){
              throw new Error('El email ingresado ya existe.');
            }
          })
    }),
  body("usuario")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail(),
  body("contrasenia")
    .notEmpty().withMessage("Debe completar este campo").bail()
    .isLength({min: 4}).withMessage("La contraseña debe tener al menos 4 caracteres")
]

let ProfileEditvalidations=[
  body("email")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isEmail().withMessage("Debe escribir un email").bail()
    .custom(function(value, {req}){ 
        return datos.Usuario.findOne({
          where: { email: value }, 
        })
          .then(function(result){
            if(result){
              if (req.session.user != undefined && result.id != req.session.user.id)
              throw new Error('El email ingresado ya existe.');
            }
          })
    }),
  body("usuario")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail(),
  body("contrasenia")
    .notEmpty().withMessage("Debe completar este campo").bail()
    .isLength({min: 4}).withMessage("La contraseña debe tener al menos 4 caracteres")
]




router.get("/register", usersController.register)
router.post("/register", validations, usersController.store)

router.get("/login",usersController.login) 
router.post("/login",usersController.loginUser)

router.get("/profile/:userid", usersController.profile)

router.get("/profileEdit/:userid", usersController.editar)
router.post("/profileEdit/:userid", ProfileEditvalidations, usersController.profileEdit)

router.post('/logout', usersController.logout)

module.exports = router;
