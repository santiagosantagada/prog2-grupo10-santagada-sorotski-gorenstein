const datos= require("../database/models")
const bcrypt=require("bcryptjs")
const {Association} = require("sequelize")
const {validationResult} = require("express-validator")


const productosController= {
    product: function(req, res){
        let idProducto = req.params.idProducto;

        let filtrado = {
            include: [
                {association: "user"},
                {association: "comentario",
                    include: [{association: "user"}]}
        ]
        }   
        
        datos.Producto.findByPk(idProducto, filtrado)
        .then(function(result) {
            //res.send(result)
            return res.render("product", {datos: result})
        })
        .catch(function(error) {
            return console.log(error);;
        });
        //return res.render("product", {datos: datos.productos})
          
    },

    searchresults: function(req, res){
        let qs= req.query.search
        let filtrado = {
            where: [{nombreProducto: qs}]
        }

        datos.Producto.findOne(filtrado)
        .then(function(result){
            if (result != undefined){
                return res.render("searchresults", {datos: result})
            } else{
                return res.send("No hay resultados para su criterio de busqueda")
        }})
            
        //}).catch(function(error) {
        //    return res.send("no existe")
       // }) ASI LO TENIAMOS ANTES EN VEZ DEL IF ELSE
       
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
                {association: "user"},
                {
                    association: "comentario", 
                    include:[{ association: "user"}]
                }
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
                {association: "user"},
                {
                    association: "comentario", 
                    include:[{ association: "user"}]
                }
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


    }

}


module.exports=productosController