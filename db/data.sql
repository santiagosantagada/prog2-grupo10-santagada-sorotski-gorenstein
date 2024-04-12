CREATE SCHEMA data_1;

USE data_1;

CREATE TABLE usuarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre 				VARCHAR(250) 	NOT NULL,
    apellido 			VARCHAR(250) 	NOT NULL,
    mail 				VARCHAR(250) 	NOT NULL,
    usuario 			VARCHAR(250) 	NOT NULL,
    contrasenia 		VARCHAR(250) 	NOT NULL,
    fechaNacimiento 	DATE 			NOT NULL,
    numeroDocumento 	INT 			NOT NULL,
    foto 				VARCHAR(250) 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt  			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , "Santiago" , "Santagada" , "santisanta07@gmail.com" , "hola123" , "*****" , "2004-11-23" , 46123123 , "fotoperfil.png" , DEFAULT , DEFAULT , DEFAULT) ;
INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , "Valentín" , "Fernandez" , "valenfer@gmail.com" , "chau123" , "*****" , "1980-11-24" , 37123123 , "fotoperfil.png" , DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , "Sofia" , "Sanchez" , "ssanchez@gmail.com" , "sofi123" , "*****" , "2000-11-24" , 45123123 , "fotoperfil.png" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , "Hernan" , "Gorenstein" , "hergoren@gmail.com" , "her123" , "*****" , "1997-11-24" , 39123123 , "fotoperfil.png" , DEFAULT ,DEFAULT , DEFAULT) ;
INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , "Sol" , "Masri" , "solmasri@gmail.com" , "sol123" , "*****" , "2007-11-24" , 47123123 , "fotoperfil.png" ,DEFAULT, DEFAULT , DEFAULT) ;

CREATE TABLE productos (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id                    INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario 			  INT 			UNSIGNED,
    nombreImagen 		VARCHAR(250) 	NOT NULL,
    nombreProducto 		VARCHAR(250) 	NOT NULL,
    descripcion			VARCHAR(250) 	NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt  			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP 
);
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES ( DEFAULT,DEFAULT,"Excelente compu" , "Computadora" , "Excelente computadora en optimas condiciones",DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , DEFAULT,"Gran Telefono " , "Telefono" , "Iphone nuevo, sin uso" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , DEFAULT,"Increibles auriculares" , "Auriculares" , "Escucha perfecta asegurada. inalambricos" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuarionombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Carga perfecta" , "Cargador" , "El mejor cargador que puedas encontrar" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Ipod nuevo" , "Ipod" , "Recien llegado a Argentina, muy bueno" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Televisión" , "Televisión" , "Televisión 60 pulgadas" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Monitor nuevo" , "Monitor" , "Monitor nuevo 144hz" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "PlayStation 5 blanca" , "PlayStation 5" , "Nueva PlayStation edición limitada" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Patineta" , "Patineta eléctrica" , "Patineta nueva, con dibujos unicos" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , DEFAULT,"Bicicleta" , "Bicicleta a motor" , "Bicicleta nueva" ,DEFAULT, DEFAULT , DEFAULT) ;


CREATE TABLE comentarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					  	INT 		UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idProducto				INT 		UNSIGNED,
    textoComentario 	VARCHAR(250) 	NOT NULL,
    FOREIGN KEY (idProducto) REFERENCES productos(id),
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comentarios (id, idProducto, textoComentario, createdAt, updatedAt, deletedAt) VALUES 
(DEFAULT, DEFAULT, "¡Impresionante! Funciona a la perfección.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Me encanta este producto, ¡totalmente recomendado!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Excelente estado, como nuevo. ¡Estoy muy satisfecho!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Increíble oferta por un producto de alta calidad.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Muy contento con mi compra, todo en perfectas condiciones.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Producto impecable, exactamente como se describe.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Fantástico! Funciona sin ningún problema.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡No podría estar más feliz con mi compra!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Estoy asombrado por la calidad de este producto.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Muy satisfecho con esta compra, vale cada centavo!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Increíblemente bueno! Definitivamente vale la pena.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "No puedo creer lo bien que funciona este producto.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Exactamente lo que estaba buscando, ¡perfecto!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Impresionado por la calidad y el rendimiento.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Mejor de lo que esperaba! Totalmente recomendado.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Producto de primera calidad a un precio excelente!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Funciona de maravilla, estoy muy impresionado.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Exactamente lo que necesitaba! Funciona a la perfección.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡No puedo creer lo bien que este producto funciona!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Estoy muy contento con esta compra, sin duda volveré!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "La calidad de este producto es excepcional.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Funciona como un encanto! Muy feliz con mi compra.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "Increíblemente satisfecho con este producto.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Producto excelente a un precio inmejorable!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡No puedo dejar de recomendar este producto!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Absolutamente asombroso! Cumple con todas mis expectativas.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Mejor de lo que esperaba! Una verdadera ganga.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Estoy sorprendido por lo bien que funciona este producto!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Muy impresionado! Definitivamente vale la pena.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Exactamente lo que necesitaba! Funciona perfectamente.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Increíble oferta por un producto de alta gama!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Realmente superó mis expectativas! Estoy encantado.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡No puedo creer lo bueno que es este producto!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Totalmente satisfecho con esta compra, gracias!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Producto de calidad superior a un precio excelente!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡No puedo recomendar este producto lo suficiente!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Fantástico! Funciona de manera impecable.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Mejor compra que he hecho en mucho tiempo!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Estoy muy impresionado por la calidad de este producto!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, DEFAULT, "¡Increíblemente feliz con mi compra, gracias por todo!", DEFAULT, DEFAULT, DEFAULT);


module.exports= productos