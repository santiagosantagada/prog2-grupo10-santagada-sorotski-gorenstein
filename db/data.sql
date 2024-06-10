CREATE SCHEMA data_3;

USE data_3;

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
    foto				VARCHAR(250) 	NOT NULL,
    foreign key (idUsuario) REFERENCES usuarios(id),
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt  			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP 
);
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES ( DEFAULT,DEFAULT,"Excelente compu" , "Computadora" , "Excelente computadora en optimas condiciones","https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Notebook-9-Pro-3.jpg" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , DEFAULT,"Gran Telefono " , "Telefono" , "Iphone nuevo, sin uso", "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/02/iPhone_14_Midnight_PDP_Image_Position-1A_LAES.jpg" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , DEFAULT,"Increibles auriculares" , "Auriculares" , "Escucha perfecta asegurada. inalambricos","https://tccommercear.vtexassets.com/arquivos/ids/157480-800-800?v=638261719983600000&width=800&height=800&aspect=true" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Carga perfecta" , "Cargador" , "El mejor cargador que puedas encontrar","https://http2.mlstatic.com/D_NQ_NP_783666-MLU70945255832_082023-O.webp",DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Ipod nuevo" , "Ipod" , "Recien llegado a Argentina, muy bueno", "https://i5.walmartimages.com/seo/Apple-iPod-touch-7th-Generation-256GB-Silver-New-Model_5185a146-a627-49fc-9063-9cea5e51c587_1.8c5b3c8cbec582210b21e7cfcf404f84.jpeg",DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Televisión" , "Televisión" , "Televisión 60 pulgadas","https://www.lg.com/ar/images/televisores/md06198056/gallery/des_1_n.jpg" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Monitor nuevo" , "Monitor" , "Monitor nuevo 144hz", "https://images.samsung.com/is/image/samsung/p6pim/ar/lc24rg50fzlczb/gallery/ar-c24rg5-433672-lc24rg50fzlczb-533475182?$650_519_PNG$" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "PlayStation 5 blanca" , "PlayStation 5" , "Nueva PlayStation edición limitada", "https://arsonyb2c.vtexassets.com/arquivos/ids/362074/PlayStation-5-DualShock.jpg?v=638162215101070000" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT ,DEFAULT, "Patineta" , "Patineta eléctrica" , "Patineta nueva, con dibujos unicos", "https://www.compu-santafe.com.ar/productos/get-imagen/39013" ,DEFAULT, DEFAULT , DEFAULT) ;
INSERT INTO productos (id,idUsuario,nombreImagen,nombreProducto,descripcion,foto,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT , DEFAULT,"Bicicleta" , "Bicicleta a motor" , "Bicicleta nueva", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhDVDLNUtslL6uRBX_xxzXXdaF3ABWkvBxDjieaqGRA&s" ,DEFAULT, DEFAULT , DEFAULT) ;


CREATE TABLE comentarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					  	INT 		UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idProducto				INT 		UNSIGNED,
    idAutor					INT			unsigned,
    textoComentario 	VARCHAR(250) 	NOT NULL,
    foreign key (idProducto) REFERENCES productos(id),
    foreign key (idAutor) references usuarios(id),
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comentarios (idProducto, idAutor, textoComentario) VALUES 
(1, 1, "¡Impresionante! Funciona a la perfección."),
(2, 1, "Me encanta este producto, ¡totalmente recomendado!"),
(3, 1, "Excelente estado, como nuevo. ¡Estoy muy satisfecho!"),
(4, 1, "Increíble oferta por un producto de alta calidad."),
(5, 2, "Muy contento con mi compra, todo en perfectas condiciones."),
(6, 2, "Producto impecable, exactamente como se describe."),
(7, 2, "¡Fantástico! Funciona sin ningún problema."),
(8, 2, "¡No podría estar más feliz con mi compra!"),
(9, 3, "Estoy asombrado por la calidad de este producto."),
(10, 3, "¡Muy satisfecho con esta compra, vale cada centavo!"),
(1, 3, "¡Increíblemente bueno! Definitivamente vale la pena."),
(2, 3, "No puedo creer lo bien que funciona este producto."),
(3, 4, "Exactamente lo que estaba buscando, ¡perfecto!"),
(4, 4, "Impresionado por la calidad y el rendimiento."),
(5, 4, "¡Mejor de lo que esperaba! Totalmente recomendado."),
(6, 4, "¡Producto de primera calidad a un precio excelente!"),
(7, 5, "Funciona de maravilla, estoy muy impresionado."),
(8, 5, "¡Exactamente lo que necesitaba! Funciona a la perfección."),
(9, 5, "¡No puedo creer lo bien que este producto funciona!"),
(10, 5, "¡Estoy muy contento con esta compra, sin duda volveré!"),
(1, 1, "La calidad de este producto es excepcional."),
(2, 1, "¡Funciona como un encanto! Muy feliz con mi compra."),
(3, 1, "Increíblemente satisfecho con este producto."),
(4, 1, "¡Producto excelente a un precio inmejorable!"),
(5, 2, "¡No puedo dejar de recomendar este producto!"),
(6, 2, "¡Absolutamente asombroso! Cumple con todas mis expectativas."),
(7, 2, "¡Mejor de lo que esperaba! Una verdadera ganga."),
(8, 2, "¡Estoy sorprendido por lo bien que funciona este producto!"),
(9, 3, "¡Muy impresionado! Definitivamente vale la pena."),
(10, 3, "¡Exactamente lo que necesitaba! Funciona perfectamente."),
(1, 3, "¡Increíble oferta por un producto de alta gama!"),
(2, 3, "¡Realmente superó mis expectativas! Estoy encantado."),
(3, 4, "¡No puedo creer lo bueno que es este producto!"),
(4, 4, "¡Totalmente satisfecho con esta compra, gracias!"),
(5, 4, "¡Producto de calidad superior a un precio excelente!"),
(6, 4, "¡No puedo recomendar este producto lo suficiente!"),
(7, 5, "¡Fantástico! Funciona de manera impecable."),
(8, 5, "¡Mejor compra que he hecho en mucho tiempo!"),
(9, 5, "¡Estoy muy impresionado por la calidad de este producto!"),
(10, 5, "¡Increíblemente feliz con mi compra, gracias por todo!");
