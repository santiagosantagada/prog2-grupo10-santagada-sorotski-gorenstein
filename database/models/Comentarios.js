module.exports = function(sequelize, dataTypes) {

    /* alias */
    let alias = "Comentario";

    /* configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idProducto: {
            autoIncrement: false,
            primaryKey: false,
            type: dataTypes.INTEGER
        },
        idAutor: {
            autoIncrement: false,
            primaryKey: false,
            type: dataTypes.INTEGER
        },
        textoComentario: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
            field: "createdAt"
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: "updatedAt"
        },
        deletedAt: {
            type: dataTypes.DATE,
            field: "deletedAt"
        }
    }
		

    /* config de la tabla */
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }

    /* definir el modelo */

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {

        //todas las relaciones
       Comentario.belongsTo(models.Usuario, {
          as: "user",
          foreignKey: "idAutor"
        });
        Comentario.belongsTo( models.Producto, {
          as: "product",
         foreignKey: "idProducto",
        });
    }
    
    return Comentario;
}