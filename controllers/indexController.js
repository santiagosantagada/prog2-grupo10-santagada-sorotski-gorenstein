const datos= require("../db/index")

const indexController= {
    index: function(req, res){
        return res.render("index", {
            "data": datos
        })
    }
}
module.exports= indexController