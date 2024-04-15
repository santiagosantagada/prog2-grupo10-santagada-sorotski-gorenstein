const productos= require("../db/index")

const productosController= {
    index: function(req, res){
        return res.render("login", {
            lista: datos.usuario,
            mensaje: "usuario"
        })
    }
}
module.exports=productosController