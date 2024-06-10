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
        }
    }
		

    /* config de la tabla */
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: false
    }

    /* definir el modelo */

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {

        //todas las relaciones
        Usuario.hasMany(models.Producto, {
            as: "product ",
            foreignKey: "idUsuario"
        });
    }
    
    return Usuario;
}