const firebase = require('firebase');
require('firebase/firestore')

firebase.initializeApp ({
	// CURRENT DB
	// apiKey: process.env.API_KEY,
	// authDomain: "greencommerce-db.firebaseapp.com",
	// projectId: "greencommerce-db",
	// AUXILIAR DB
	apiKey: "AIzaSyBmVAML8PeJwaPl0vp5K2KIPOltQRnah1I",
	authDomain: "greencommerce-db-auxiliar.firebaseapp.com",
	projectId: "greencommerce-db-auxiliar",
})

var db = firebase.firestore()


var productos = [
	// Herramientas
	{
		"categoria": "Herramientas",
		"descripcionCategoria":  "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Rastrillo de alambre",
		"precio": 49.90,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_Oj1daWnwIlFGHxLVx46VQz-OfMY7VauYAyPonbl7i0RK8o_CuhKQ3OrPiXIldqqTmI&usqp=CAU",
		"alt": "Rastrillo de alambre",
		"id": "21",
		"stock": 10
	},
	{
		"categoria": "Herramientas",
		"descripcionCategoria":  "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Set pala y tridente",
		"precio": 35.00,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://2.bp.blogspot.com/-ym1bD77zh2k/WGPm5djH-MI/AAAAAAABRIo/_vi_1MOXuiURqGx4fNqWtkk7hRhWd8VewCEw/s1600/000%2BMis%2Bherramientas%2Bde%2Bjard%25C3%25ADn%2B%252827%2529%2B.jpg",
		"alt": "Set pala y tridente",
		"id": "22",
		"stock": 20
	},
	{
		"categoria": "Herramientas",
		"descripcionCategoria":  "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Regadera de zinc",
		"precio": 140.50,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "http://catalogos.devenado.ar/contenidos/19620_1.jpg",
		"alt": "Regadera de zinc",
		"id": "23",
		"stock": 33
	},
	{
		"categoria": "Herramientas",
		"descripcionCategoria":  "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Aspersor 360??",
		"precio": 40.50,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Q8dLrqwGd9285skWXLDD1mw6YFla2CZLTg&usqp=CAU",
		"alt": "Aspersor 360??",
		"id": "24",
		"stock": 5
	},
	// Invernaderos
	{
		"categoria": "Invernaderos",
		"descripcionCategoria": "Contamos con varios modelos de invernaderos y elementos para su optima utilizacion",
		"titulo": "Invernadero Canadiense",
		"precio": 49.90,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xXpl8bMcvlUvGzHYL1E1Qos9XpJ7ajUpWg&usqp=CAU",
		"alt": "Invernadero 5x10 metros",
		"id": "31",
		"stock": 10
	},
	{
		"categoria": "Invernaderos",
		"descripcionCategoria": "Contamos con varios modelos de invernaderos y elementos para su optima utilizacion",
		"titulo": "Invernadero victoriano",
		"precio": 35.00,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://www.hideouthouse.com/wp-content/uploads/2015/05/solar-panel-greenhouse.jpg",
		"alt": "Invernadero 3x5 metros",
		"id": "32",
		"stock": 10
	},
	{
		"categoria": "Invernaderos",
		"descripcionCategoria": "Contamos con varios modelos de invernaderos y elementos para su optima utilizacion",
		"titulo": "Torre de cultivo",
		"precio": 40.50,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://pacificdomes.com/WP/wp-content/uploads/2021/02/interior-greenhouse-dome.jpg",
		"alt": "Torres para cultivos acuaponicos verticales y peque??as superficies",
		"id": "33",
		"stock": 10
	},
	{
		"categoria": "Invernaderos",
		"descripcionCategoria": "Contamos con varios modelos de invernaderos y elementos para su optima utilizacion",
		"titulo": "Invernadero domo",
		"precio": 40.50,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAU3XoKaTesL3M970RbUFaetZ4h-FEHgliw&usqp=CAU",
		"alt": "Invernadero domo",
		"id": "34",
		"stock": 10
	},
	// "Plantas"
	{
		"categoria": "Plantas",
		"descripcionCategoria": "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Oregano",
		"precio": 49.90,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGAWIMOsb3HqwvtRjbT8kiyFE3LpE03rwEg&usqp=CAU",
		"alt": "Planta de Oregano",
		"id": "11",
		"stock": 10
	},
	{
		"categoria": "Plantas",
		"descripcionCategoria": "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Menta",
		"precio": 35.00,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwr5ay4-BSumj6brRZgGJlCGudhA_uuLbhw&usqp=CAU",
		"alt": "planta de Menta",
		"id": "12",
		"stock": 10
	},
	{
		"categoria": "Plantas",
		"descripcionCategoria": "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Albahaca",
		"precio": 40.50,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNkXf1uJjcS4pUPKZabI2QM1FL6DhHC_xUg&usqp=CAU",
		"alt": "Planta de Albahaca",
		"id": "13",
		"stock": 10
	},
	{
		"categoria": "Plantas",
		"descripcionCategoria": "Plantas es la seccion donde encontraras todas las especies con las que disponemos actualmente",
		"titulo": "Tomillo",
		"precio": 45.50,
		"descripcionProducto": "https://tailwindui.com/components/ecommerce/components/product-lists",
		"imagen": "https://www.radiopopularsanluis.com.ar/u/fotografias/m/2021/2/10/f800x450-99174_150620_156.jpg",
		"alt": "Planta de Tomillo",
		"id": "14",
		"stock": 10
	}
]
	productos.forEach((obj) => {
		db.collection('productos')
		.add({
			categoria: obj.categoria,
			descripcionCategoria: obj.descripcionCategoria,
			titulo: obj.titulo,
			precio: obj.precio,
			descripcionProducto: obj.descripcionProducto,
			imagen: obj.imagen,
			alt: obj.alt,
			id: obj.id,
			stock: obj.stock
		})
		.then((docRef) =>{
			console.log('producto registrado con ID: ', docRef.id)
		})
		.catch((error)=>{
			console.error("Error al agregar el documento: ", error)
		})
	})