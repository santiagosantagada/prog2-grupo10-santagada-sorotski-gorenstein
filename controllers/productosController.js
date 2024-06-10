const datos= require("../database/models")
const bcrypt=require("bcryptjs")
const {Association} = require("sequelize")
const {validationsResult} = require("express-validator")


const productosController= {
    product: function(req, res){
        let idProducto = req.params.idProducto;

        let filtrado = {
            include: [
                {association: "user"},
                {association: "comentario"}
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
        let form = req.body
        datos.Producto.create(form)
        .then((result) => {
            return res.redirect("/product")
        }).catch((error) => {
            return console.log(error)
        })
        
    },
    showFormCreate: function (req, res) {
        if (req.session.user == undefined){
            return res.redirect("/users/login")
        } else{
            return res.render("product-add")
        }
    }

}


module.exports=productosController