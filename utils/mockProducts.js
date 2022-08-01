/**
 * Crear un array de productos y exportarlo para 
 * que lo utilice la ruta /products de la carpeta /api.
 * 
 * Una vez creado, deberás ejecutar en consola el comando
 * `npm run test:unit:watch mockProducts.spec.js` y corroborar que
 * todos los tests estén pasando.
 */

 let products = [
	{
		'id': 1,
		'title': "Macbook",
		'price': 1300,
        'description': "esto es una descripción",
		'quantity': 40,
	},
	{
		'id': 2,
		'title': "Iphone",
		'price': 1000,
		'description': "esto es una descripción",
		'quantity': 50,
	},
	{
		'id': 3,
		'title': "Mouse",
		'price': 20,
		'description': "esto es una descripción",
		'quantity': 5,
	},
	{
		'id': 4,
		'title': "Tablet",
		'price': 500,
		'description': "esto es una descripción",
		'quantity': 20,
	}
]

module.exports = products;