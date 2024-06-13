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
    .custom(function(value){ //Verifica que el email no exista.
        return datos.Usuario.findOne({
          where: { email: value }, //Usamos el atributo value del campo input.
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


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get("/register", usersController.register)
router.get("/login",usersController.login) 
router.get("/profile/:userid", usersController.profile)
router.get("/profileEdit", usersController.profileEdit)


router.post('/logout', usersController.logout)
router.post("/register", validations, usersController.store)
router.post("/login",usersController.loginUser)

module.exports = router;
