module.exports = function(sequelize, dataTypes) {

    /* alias */
    let alias = "Usuario";

    /* configuracion de las columnas */
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.INTEGER
        },
        fechaNacimiento: {
            type: dataTypes.INTEGER
        },
        numeroDocumento: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.INTEGER
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }

    /* definir el modelo */

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {

        //todas las relaciones
        Usuario.hasMany(models.Producto, {
            as: "product",
            foreignKey: "idUsuario"
        }),
        Usuario.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "idAutor"
        })
    }
    
    return Usuario;
}