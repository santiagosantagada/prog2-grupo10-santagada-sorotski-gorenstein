const datos= require("../db/index")

const usersController= {
    register: function(req, res){
        return res.render("register", {
            datos: datos
        })
    },
    profile: function(req, res){
        console.log(datos.usuario.usuario);
        return res.render("profile", {
            datos: datos
        })
    },
    profileEdit: function(req, res){
        return res.render("profile-edit", {
            datos: datos
        })
    },
    login: function(req, res){
        return res.render("login", {
            datos: datos
        })
    }
}
module.exports= usersController