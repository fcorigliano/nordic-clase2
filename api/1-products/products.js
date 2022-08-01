const router = require('nordic/ragnar').router();
const productsList = require('../../utils/mockProducts');
const { logPath } = require('./middlewares');
/**
 * Vamos a “simular” una llamada a la API de MeLi (por el momento,
 * no vamos a interactuar con la API oficial, eso vamos a hacerlo 
 * en las próximas clases). Para lograrlo, vamos a necesitar crear 
 * un array de productos en el archivo ubicado en /utils/mockProducts.js 
 * 
 * Queremos que al ingresar a la ruta “/api/products” se nos muestren
 * 4 productos distintos en pantalla. Los mismos deberán tener las 
 * siguientes propiedades (respetar los nombres):
 * -id
 * -title
 * -price
 * -description
 * -quantity
 * 
 * Debemos requerir el archivo con los productos para enviarlos como respuesta.
 * 
 * Para que este endpoint funcione, debemos implementar la ruta en /api/index.js
 * 
 * Deberás ingresar a la URL https://dev.mercadolibre.com.ar:8443/api/products
 * (o al dominio de tu país) y se deberá ver un JSON con los productos en pantalla.
 * 
 ********************************************************************************
 * Despues de implementar el código, correr el comando
 * `npm run test:unit:watch products-route` y comprobar que pasan todos los tests.
 ********************************************************************************
 */

 router.get('/', (req, res) => {
    res.json(productsList);
});

router.get('/:category?', logPath, (req, res) => {
    res.json({category: res.locals.category, productsList});
});

module.exports = router;
