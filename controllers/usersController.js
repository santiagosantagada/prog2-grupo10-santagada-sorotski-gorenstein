const datos= require("../database/models")

const usersController= {
    register: function(req, res){
    },
    profile: function(req, res){
        return res.render("profile", {
            datos: datos.usuario
        })
    },
    profileEdit: function(req, res){
        return res.render("profile-edit", {
            datos: datos.productos
        })
    },
    login: function(req, res){
        return res.render("login", {
          
        })
    }
}

module.exports= usersController