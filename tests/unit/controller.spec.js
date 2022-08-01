const { fetchProducts } = require('../../app/pages/products/controller');
const { createRequest, createResponse } = require('node-mocks-http');
const restclient = require('nordic/restclient');
const mockProducts = require('../utils/products.json');

jest.mock('nordic/restclient', () => () => ({
    get: jest.fn(() => Promise.resolve({ data: { results: mockProducts }}))
}));

describe('El middleware fetchProducts', () => {
    const req = createRequest({
        method: 'GET',
        url: '/home',
        platform: {
            siteId: 'MLA'
        }
    });
    const res = createResponse();
    
    it('1) Guarda un array de productos en res.locals.products', () => {
        return fetchProducts(req, res, () => {
            expect(res.locals.products).toBeInstanceOf(Array);
            expect(res.locals.products[0].title).toBe('Motorola');
        });
    });
});