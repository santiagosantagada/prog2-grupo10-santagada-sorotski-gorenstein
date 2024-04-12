const express =require("express")
const router=express.Router();

const loginController=require("../controllers/loginController");

router.get("/",loginController.index)  /*ver lo de index*/

/*module.exports= router;*/
