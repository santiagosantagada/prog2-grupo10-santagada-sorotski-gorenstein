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
    store: (req, res)=>{ 
        let errors= validationResult(req)
        if (errors.isEmpty()) {
            let form = req.body
            let user = {
                nombre: form.nombre,
                apellido: form.apellido,
                usuario: form.usuario,
                email: form.email,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                dni : form.nrodedocumento,
                fecha_nacimiento : form.fechadenacimiento,
                foto : form.foto,
            }
            
    
            datos.Usuario.create(user)
            .then((result)=>{
                req.session.user = result
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
        let id = req.params.userid
        let filtro = {
            include: [
                {association: "product"}
            ],
            order: [['createdAt', 'DESC']]
        }
       
        datos.Usuario.findByPk(id, filtro)
        .then(function(result){
            //res.send(result.foto.length ==0)
            res.render("profile", {datos: result})
        })
        .catch(function(error){
            return console.log(error)
        })
    },

    profileEdit: function(req, res){
        let idd = req.params.userid;
        let errors = validationResult(req);
        let form = req.body
        let filtro = {
            include: [
                {association: "product"},
            ]}
        //return res.send(errors)

        if (errors.isEmpty()) {
            
            let editar_perfil = {
                nombre: form.nombre,
                apellido: form.apellido,
                usuario: form.usuario,
                email: form.email,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                foto : form.foto,
                dni : form.nrodedocumento,
                fecha_nacimiento : form.fechadenacimiento,
   
            }
        
        
            datos.Usuario.update(editar_perfil, {where: {id: idd}})
            .then((result) => {
                ///res.send(result)
                req.session.user = {
                    id: idd,
                    nombre: form.nombre,
                    apellido: form.apellido,
                    usuario: form.usuario,
                    email: form.email,
                    dni : form.nrodedocumento,
                    contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                    foto : form.foto,
                    fecha_nacimiento : form.fechadenacimiento,
                }
                return res.redirect(`/users/profile/${idd}`)
            }).catch((error) => {
                return console.log(error)
            })
        }else {
            for (let i = 0; i < errors.errors.length; i++) {
                if (errors.errors[i].path == "contrasenia") {
                    if (errors.errors[i].value == "") {
                        let editar_perfil = {
                            nombre: form.nombre,
                            apellido: form.apellido,
                            usuario: form.usuario,
                            email: form.email,
                            foto : form.foto,
                            dni : form.nrodedocumento,
                            fecha_nacimiento : form.fechadenacimiento,
                        }
                    
                    
                        datos.Usuario.update(editar_perfil, {where: {id: idd}})
                        .then((result) => {
                            ///res.send(result)
                            req.session.user = {
                                id: idd,
                                nombre: form.nombre,
                                apellido: form.apellido,
                                usuario: form.usuario,
                                email: form.email,
                                foto : form.foto,
                                dni : form.nrodedocumento,
                                fecha_nacimiento : form.fechadenacimiento,
                                
                            }
                            return res.redirect(`/users/profile/${idd}`)
                        }).catch((error) => {
                            return console.log(error)
                        })
                    }
                } else {
                    datos.Usuario.findByPk(idd, filtro)
                    .then(function(result){
                        //return res.send(result)
                        if (req.session.user.id == result.id){
                            
                            return res.render("profile-edit", {
                                datos: result, 
                                errors: errors.mapped(), 
                                old: req.body
                            });
                        }else {
                            res.send("Solo puedes editar tu propio perfil")
                        }
                        
                    }).catch((err) => {
                        return console.log(err);
                    });
                }
                
            } 
            
            
        }
    
       
       
    },

    editar: function(req, res){
        let id = req.params.userid;
        if (req.session.user == undefined){
            return res.redirect("/users/login")
            
        } else{
            datos.Usuario.findByPk(id)
            .then(function(result)  {
                //res.send(result)
                if (req.session.user.id != id){
                    
                    res.send("Solo puedes editar tu propio perfil")
                    
                }else {
                    return res.render("profile-edit", {datos: result});
                }
                
            }).catch((err) => {
                return console.log(err);
            });
        }
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
                req.session.user = {
                    id: result.id,
                    nombre: result.nombre,
                    apellido: result.apellido,
                    usuario: result.usuario,
                    email: result.email,
                    dni : result.nrodedocumento,
                    fecha_nacimiento : result.fechadenacimiento,
                    foto : result.foto,
                }
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