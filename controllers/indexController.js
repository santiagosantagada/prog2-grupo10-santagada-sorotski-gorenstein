const datos= require("../db/index")

const indexController= {
    index: function(req, res){
        return res.render("index", {
            datos: datos
        })
    }
}
module.exports= indexController