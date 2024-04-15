const datos= require("../db/index")
const loginController = {
    index: function(req, res){
        return res.render("login", {
            lista: datos.usuario,
            mensaje: "usuario"
        })
    }
}

module.exports=loginController