const datos= require("../database/models")
const {Association} = require("sequelize")

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
            return res.render("searchresults", {datos: result})
        }).catch(function(error) {
            return console.log(error)
        })
        
       
    },
    productAdd: function(req, res){
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
            return res.render("productAdd")
        }
    }

}


module.exports=productosController