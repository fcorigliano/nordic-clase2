const router = require('nordic/ragnar').router();
const productsList = require('../../utils/mockProducts');
const { logPath, supportedCurrencies } = require('./middlewares');

/** 
 * Ejercicio 2 - Crear un endpoint /api/currencies
 * 
 * Este endpoint debe utilizar el middleware "supportedCurrencies" 
 * que se encuentra en el archivo middlewares.js (para esto deberás 
 * implementarlo primero). 
 * 
 * El endpoint deberá responder con el valor de res.locals.currencies
 * 
 * NOTA: Para poder visualizar el resultado en el navegador, es necesario 
 * implementar esta ruta en /api/index.js
 * 
 * Deberás ingresar a la URL https://dev.mercadolibre.com.ar:8443/api/currencies
 * (o al dominio de tu país) y se deberá ver un JSON con las divisas en pantalla.
 * 
 ************************************************************************************
 * Despues de implementar el código, correr el comando
 * `npm run test:unit:watch currencies-route` y comprobar que pasan todos los tests.
 ***********************************************************************************
 */

 router.get('/', supportedCurrencies, (req, res) => {
    const { currencies } = res.locals;
    res.json(currencies);
 });

module.exports = router;