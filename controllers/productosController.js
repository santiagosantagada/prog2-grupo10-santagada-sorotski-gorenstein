const datos= require("../db/index")

const productosController= {
    index: function(req, res){
        return res.render("productos", {
            "data": datos
        })
    },
    productos: function(req, res){
        return res.render("productos", {
            "data": datos
        })
    },
    searchresults: function(req, res){
        return res.render("searchresults", {
            "data": datos
        })
    },
    productAdd: function(req, res){
        return res.render("productAdd", {
            "data": datos
        })
    }

}
module.exports=productosController