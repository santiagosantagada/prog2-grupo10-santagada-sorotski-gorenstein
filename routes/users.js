var express = require('express');
var router = express.Router();
const usersController= require("../controllers/usersController")



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/register", usersController.register)
router.get("/login",usersController.login) 
router.get("/profile", usersController.profile)
router.get("/profileEdit", usersController.profileEdit)


module.exports = router;
