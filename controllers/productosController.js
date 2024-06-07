const datos= require("../database/models")
const {Association} = require("sequelize")

const productosController= {
    product: function(req, res){
        datos.Producto.findAll()

        //return res.render("product", {datos: datos.productos})
        let filtrado= {
            include: [
                {association: "product"}

            ]
        }
        datos.Producto.findAll(filtrado)
        .then(function (results) {
            return res.send(results)
            return res.render("product", {datos: results})
        })
        .catch(function(error){
            return console.log(error)
        })
    },
    searchresults: function(req, res){
        return res.render("searchresults", {
            datos: datos.productos

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