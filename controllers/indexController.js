const datos= require("../database/models")

const indexController= {
    index: function(req, res){
        let filtrado= {
            include: [
            {association: "user"}
            ]
        }
        datos.Producto.findAll(filtrado)
        .then(function (results) {
            //return res.send(results)
            return res.render("index", {datos: results})
        })
        .catch(function(error){
            return console.log(error)
        })
        
        /*return res.render("index", {
            datos: datos
        })*/
    }
}
module.exports= indexController