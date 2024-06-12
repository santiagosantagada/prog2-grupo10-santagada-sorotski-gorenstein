const datos = require("../database/models")
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
                nombre: form.nombre,
                appelido: form.apellido,
                usuario: form.usuario,
                email: form.email,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                dni : form.nrodedocumento,
                fecha_nacimiento : form.fechadenacimiento,
                foto_perfil : form.fotodeperfil,
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
            old: req.body
            })
        }
        
        
    },
    profile: function(req, res){
        if(req.cookies.email && !req.session.user){
            let filtro={
                where:{email: req.cookies.email}
            }
            datos.Usuario.findOne(filtro)
            
            .then((function(user) {
                return res.send(filtro)
                req.session.user= {
                nombre: user.nombre,
                appelido: user.apellido,
                usuario: user.usuario,
                email: user.email,
                dni : user.nrodedocumento,
                fecha_nacimiento : user.fechadenacimiento,
                foto_perfil : user.fotodeperfil,
                }
                return res.send(req.session.user)
                return res.render("profile", {user: req.session.user})
            }))
            .catch(function(error){
                return console.log(error)
            })
        

        }else{
            return res.send(filtro)
            res.render("profile", {user: req.session.user})
        }
        
        
        
        //return res.render("profile", {
          //  datos: datos.usuario
        //})
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
            where:{email: form.email}
        };
        datos.Usuario.findOne(filtro)
        .then((result)=>{
            //return res.send(result)
            if(result == undefined) return res.send("No existe el mail "+ form.email);
            let check = bcrypt.compareSync(form.contrasenia, result.contrasenia);
            //return res.send(check)
            if(result){
                if(check){
                req.session.user=result
                if(form.rememberme) {//!= undefined)
                    res.cookie("userId", result.id, {maxAge: 1000 * 60 * 15})
                }
                return res.redirect("/");
                
                }else{
                    return res.send("La contrasenia es incorrecta")
                }  
            }
                      
            

        }).catch((error)=>{
            return console.log(error)
        })
    },
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie("userId")
        return res.redirect("/")
    }
}

module.exports= usersController