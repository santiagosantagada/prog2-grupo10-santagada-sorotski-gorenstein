var express = require('express');
var router = express.Router();
const indexController= require("../controllers/indexController")


router.get("/", indexController.index)

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */ //

module.exports = router;
