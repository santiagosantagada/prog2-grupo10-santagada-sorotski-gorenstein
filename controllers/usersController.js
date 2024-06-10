const datos= require("../database/models")

const usersController= {
    register: function(req, res){
        if(req.session.user != undefined){
            return res.redirect("/")
        } else{
            return res.render("register")
        }
    },
    store: (req, res)=>{
        let form = req.body
        let user = {
            name: form.name
            //email: form.email
            //password

        }
        datos.User.create(user)
        .then((result)=>{
            return res.redirect("/users/login")
        }).catch((error)=>{
            return console.log(error)
        })
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