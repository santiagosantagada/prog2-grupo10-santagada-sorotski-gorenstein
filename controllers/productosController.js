const datos= require("../database/models")
const {Association} = require("sequelize")

const productosController= {
    product: function(req, res){
        return res.render("product", {
            datos: datos
        })
    },
    searchresults: function(req, res){
        return res.render("searchresults", {
            datos: datos.productos

        })
    },
    productAdd: function(req, res){
        return res.render("product-add", {
            datos: datos
        })
    }

}


module.exports=productosController