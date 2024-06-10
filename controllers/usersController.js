const datos= require("../database/models")
const {validationResult} = require("express-validator");

const usersController= {
    register: (req, res)=>{
        if(req.session.user != undefined){
            return res.redirect("/")
        } else{
            return res.render("register")
        }
    },
    store: (req, res)=>{ //no funciona
        let errors= validationResult(req)
        if (errors.isEmpty()) {
            let form = req.body
            let user = {
                name: form.name,
                email: form.email,
                password: bcrypt.hashSync(form.password, 10)
            }
            
    
            datos.Usuario.create(user)
            .then((result)=>{
                return res.redirect("/users/login")
            }).catch((error)=>{
                return console.log(error)
            }) 
        }else{
            return res.render("register", {
                
                errors: errors.mapped()
            ,
            old:req.body
            })
        }
        
        
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
    login: (req, res)=>{
        return res.render("login", {
          
        })
    }
}

module.exports= usersController