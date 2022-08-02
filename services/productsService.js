/**
 * Ejercitación integradora:
 * En este archivo deberás crear el servicio.
 *
 ********************************************
 * Una vez creado, deberás correr el comando 
 * `npm run test:unit:watch products-service`
 * y corroborrar que pasen los tests.
 ********************************************
 */

 const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: 'https://api.mercadolibre.com'
});

 class ServiceProduct{
    static getProducts(siteId, name, limit){
        // https://internal-api.mercadolibre.com/sites/MLA/search?q=tablet

        
        // return restclient.get('sites/' + siteID + '/search?q=' + name)

        // return restclient.get(`/sites/${siteID}/search?`,{
        //     params:{
        //         q:name
        //     }
        // })

        return restclient.get(`/sites/${siteId}/search?q=${name}&limit=${limit}`)
            .then(response => response.data.results);
    }
 }

 module.exports = ServiceProduct;