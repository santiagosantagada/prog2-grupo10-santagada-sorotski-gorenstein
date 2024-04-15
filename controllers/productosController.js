const datos= require("../db/index")

const productosController= {
    index: function(req, res){
        return res.render("productos", {
            datos: datos
        })
    },
    productos: function(req, res){
        return res.render("product", {
            datos: datos
        })
    },
    searchresults: function(req, res){
        return res.render("searchresults", {
            datos: datos
        })
    },
    productAdd: function(req, res){
        return res.render("product-add", {
            datos: datos
        })
    }

}
module.exports=productosController