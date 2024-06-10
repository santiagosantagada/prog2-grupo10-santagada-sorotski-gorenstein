module.exports = function(sequelize, dataTypes) {

    /* alias */
    let alias = "Producto";

    /* configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            autoIncrement: false,
            primaryKey: false,
            type: dataTypes.INTEGER
        },
        nombreImagen: {
            type: dataTypes.STRING
        },
        nombreProducto: {
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        foto: {
            type: dataTypes.STRING
        }
    }
   
		

    /* config de la tabla */
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false
    }

    /* definir el modelo */

    let Producto = sequelize.define(alias, cols, config);

   Producto.associate = function(models) {

        //todas las relaciones
        Producto.belongsTo(models.Usuario, {
            as: "user",
            foreignKey: "idUsuario"
        }),
        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "idAutor"
        })
    }
    
  
    
    return Producto;
}