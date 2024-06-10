var express = require('express');
var router = express.Router();
const usersController= require("../controllers/usersController")
const {body} = require("express-validator");
let validations=[
  body("email")
  .notEmpty()
  .withMessage("Debe completar este campo")
  .bail()
  .isEmail().withMessage("Debe escribir un email").bail()
  .custom(function(value, {req}){ //Verifica que el email no exista.
      return datos.Usuario.findOne({
        where: { email: req.body.email }, //Usamos el atributo value del campo input.
      })
        .then(function(user){
          if(user){
            throw new Error('El email ingresado ya existe.');
          }
        })
  })
]


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get("/register", usersController.register)
router.get("/login",usersController.login) 
router.get("/profile", usersController.profile)
router.get("/profileEdit", usersController.profileEdit)



router.post("/register", validations, usersController.store)

module.exports = router;
