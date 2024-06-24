const datos= require("../database/models")
const bcrypt=require("bcryptjs")
const {Op} = require("sequelize")
const {Association} = require("sequelize")
const {validationResult} = require("express-validator")


const productosController= {
    product: function(req, res){
        let idProducto = req.params.idProducto;
        
        let filtrado = {
            include: [
                { association: "user" },
                { 
                    association: "comentario",
                    include: [{ association: "user" }]
                },

            ],
            order: [["comentario", "createdAt", "DESC"]]

        };
        
        datos.Producto.findByPk(idProducto, filtrado)
        .then(function(result) {
            //res.send(result)
            return res.render("product", {datos: result})
        })
        .catch(function(error) {
            return console.log(error);;
        });
          
    },

    searchresults: function(req, res){
        let qs= req.query.search
        let filtrado = {
            where: {[Op.or]: 
                [{nombreProducto: {[Op.like]: `%${qs}%`}},
                 {descripcion: { [Op.like]: `%${qs}%`}}]
            },
            include: [
            {association: "user"}
            ],
            order: [['createdAt', 'DESC']]
        }

        datos.Producto.findAll(filtrado)
        .then(function(result){
            return res.render("searchresults", {datos: result, buscador: qs})
        })
            
        .catch(function(error) {
           return console.log(error)
        })
       
    },
    productadd: function(req, res){
        let errors= validationResult(req)
        if (errors.isEmpty()) {
            let form = req.body
            let producto_nuevo = {
                idUsuario : req.session.user.id,
                nombreProducto: form.nombreProducto,
                foto: form.foto,
                descripcion: form.descripcion}
        
        
            datos.Producto.create(producto_nuevo)
            .then((result) => {
                //return res.send(result)
                return res.redirect("/")
            }).catch((error) => {
                return console.log(error)
            })
        }else {
            return res.render("product-add",{
                errors: errors.mapped(),
                old: req.body
            })
        }
        
    },
    showFormCreate: function (req, res) {
        if (req.session.user == undefined){
            return res.redirect("/users/login")
        } else{
            return res.render("product-add")
        }
    },
    editproduct: function(req,res){
        let idd = req.params.productoId;
        let errors = validationResult(req);
        let form = req.body
        let filtro = {
            include: [
                {association: "user"}
                
            ]}

        if (errors.isEmpty()) {
            
            let editar_producto = {
                idUsuario : req.session.user.id,
                nombreProducto: form.nombreProducto,
                foto: form.foto,
                descripcion: form.descripcion}
        
        
            datos.Producto.update(editar_producto, {where: {id: idd}})
            .then((result) => {
                //res.send(result)
                return res.redirect("/")
            }).catch((error) => {
                return console.log(error)
            })
        }else {
            datos.Producto.findByPk(idd, filtro)
            .then(function(result){
                //return res.send(result)
                if (req.session.user.id == result.idUsuario){
                    
                    return res.render("editproduct", {
                        datos: result, 
                        errors: errors.mapped(), 
                        old: req.body
                    });
                }else {
                    res.send("Solo podras editar un producto que sea tuyo")
                }
                
            }).catch((err) => {
                return console.log(err);
            });
            
        }
    
    },
    showformUpdate: function(req,res){
        let id = req.params.productoId;
        let filtro = {
            include: [
                {association: "user"}
                
            ]
        }
        if (req.session.user == undefined){
            return res.redirect("/users/login")
        } else{
        
            datos.Producto.findByPk(id, filtro)
            .then(function(result)  {
                //res.send(result)
                if (req.session.user.id == result.idUsuario){
                    
                    return res.render("editproduct", {datos: result});
                }else {
                    res.send("Solo podras editar un producto que sea tuyo")
                }
                
            }).catch((err) => {
                return console.log(err);
            });
    
        }


    },
    delete: function(req, res) {
        let idd = req.params.id;
        let filtro = {
            include: [
                { association: "user" },
                {
                    association: "comentario", 
                    include: [{ association: "user" }]
                }
            ]
        };
    
        let filtrado = {
            where: { id: idd }
        };
        
        datos.Producto.findByPk(idd, filtro)
        .then(function(result) {
            if (req.session.user.id == result.idUsuario) {
                
                datos.Comentario.destroy({
                    where: { idProducto: idd }
                })

                datos.Producto.destroy(filtrado)
                .then(function() {
                    return res.redirect("/");
                })
                .catch(function(error) {
                    return console.log(error);
                });
            } else {
                res.send("Solo puedes borrar un producto que sea tuyo");
            }
        })
        .catch(function(error) {
            return console.log(error);
        });
    },

    comentario: function(req,res){
        let idd = req.params.idProducto;
        let errors = validationResult(req)
        let form = req.body

        if (errors.isEmpty()) {
            let comentario_nuevo = {
                idProducto: idd,
                idAutor : req.session.user.id,
                textoComentario: form.textoComentario
            }
        
            datos.Comentario.create(comentario_nuevo)
            .then(function(result) {
                //res.send(result)
                return res.redirect(`/product/id/${idd}`)
            
            }).catch((error) => {
                return console.log(error)
            })
        }else {
            let filtro= {
                include: [
                    {association: "user"},
                    {
                        association: "comentario", 
                        include:[{ association: "user"}]
                    }]
            }
            datos.Producto.findByPk(idd, filtro)
            .then(function(result){
                return res.render("product", {
                    datos: result,
                    errors: errors.mapped(),
                    old: req.body
                });
            })
            .catch((error) => {
                return console.log(error)
            })
        }
    }

}


module.exports=productosController