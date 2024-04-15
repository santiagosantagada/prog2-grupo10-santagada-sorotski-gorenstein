const datos= require("../db/index")

const usersController= {
    register: function(req, res){
        return res.render("register", {
            "data": datos
        })
    },
    profile: function(req, res){
        return res.render("profile", {
            "data": datos
        })
    },
    profileEdit: function(req, res){
        return res.render("profileEdit", {
            "data": datos
        })
    },
    login: function(req, res){
        return res.render("login", {
            "data": datos
        })
    }
}
module.exports= usersController