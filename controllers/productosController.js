const datos= require("../db/index")

const productosController= {
    product: function(req, res){
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