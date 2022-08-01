const request = require('supertest');
const api = require('../../index');

describe('La ruta /products del ejercicio 1', () => {  
    let baseUrl = `/api/products?domain_override=mercadolibre.com.ar`;

    it('1) Responde con un array de 4 productos', async () => {
        const response = await request(api.app).get(`${baseUrl}`);
        let products = await JSON.parse(response.res.text);

        expect(products).toBeInstanceOf(Array);
        expect(products.length).toBe(4);
    });

    it('2) Cada producto tiene las propiedades id, title, price, description y quantity', async () => {
        const response = await request(api.app).get(`${baseUrl}`);
        let products = await JSON.parse(response.res.text);
        
        products.forEach(p => {
            expect(Object.keys(p)).toEqual(expect.arrayContaining([
                'id', 'title', 'price', 'description', 'quantity'
            ]));
        });
    });
});