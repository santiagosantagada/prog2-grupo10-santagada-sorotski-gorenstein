var express = require('express');
var router = express.Router();
const indexController= require("../controllers/indexController")
const {body} = require("express-validator");


router.get("/", indexController.index)

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */ //

module.exports = router;
