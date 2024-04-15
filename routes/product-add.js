const express =require("express")
const router=express.Router();

const productaddController =require("../controllers/product-add-Controller");

router.get("/",productaddController.index)  /*ver lo de index*/

module.exports= router