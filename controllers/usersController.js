const datos= require("../database/models")
const bcrypt=require("bcryptjs")
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
                nombre: form.name,
                email: form.email,
                contrasenia: bcrypt.hashSync(form.password, 10)
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
    },
    loginUser:(req,res)=>{
        let form=req.body
        //return res.send(form)
        let filtro={
            where:[{email: form.email}]
        };
        datos.Usuario.findOne(filtro)
        .then((result)=>{
            //return res.send(result)
            
            if(result==null) return res.send("No existe el mail"+ form.email)
            let check=bcrypt.compareSync(form.password,result.contrasenia);
            if(check){
                req.session.user=result
                if(form.rememberme != undefined){
                    res.cookie("userId", result.id, {maxAge: 1000 * 60 * 15})
                }
                return res.redirect("/");
                
            }else{
                return res.send("La contrasenia es incorrecta")
            }
        }).catch((error)=>{
            return console.log(error)
        })
    }
}

module.exports= usersController