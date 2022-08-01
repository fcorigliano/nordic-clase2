const request = require('supertest');
const api = require('../../index');

describe('La ruta /currencies', () => {  
    let baseUrl = `/api/currencies?domain_override=mercadolibre.com.ar`;

    it('1) Responde con el array de divisas requeridas', async () => {
        const response = await request(api.app).get(`${baseUrl}`);
        let currencies = await JSON.parse(response.res.text);

        expect(currencies).toEqual(expect.arrayContaining([
            'EUR',
            'USD'
        ]));
    });
});
