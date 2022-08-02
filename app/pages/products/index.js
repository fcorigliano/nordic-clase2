/**
 * Ejercitación Integradora:
 * 
 * Una vez cumplidas todas las consignas, ejecutar el comando 
 * `npm run test:unit:watch productsview` y corroborar que pasen todos
 * los tests.
 * 
 * Por otro lado, ejecutar el comando `npm run test:unit:watch controller` 
 * y corroborar que el test que prueba el funcionamiento del controller, pase.
 * 
 *****************************************************************************
 * NOTA: Para que los tests del controller y la view de esta page pasen, 
 * primero deberás haber implementado el servicio que trae los productos de la 
 * API de MeLi en /services/productsService.js
 *****************************************************************************
 */


 /**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const { render, fetchProducts } = require('./controller');

/**
 * Routers
 */
router.get('/', fetchProducts, render);

/**
 * Expose router
 */
module.exports = router;
