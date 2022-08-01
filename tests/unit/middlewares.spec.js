const { logPath, supportedCurrencies } = require('../../api/2-currencies/middlewares');
const httpMocks = require('node-mocks-http');

describe('1) logPath', () => {
    const req = httpMocks.createRequest({
        method: 'GET', 
        url: '/api/currencies'
    });
    const res = httpMocks.createResponse();
    const mockLog = jest.spyOn(console, 'log');

    it('Debe imprimir en consola el path de la request', () => {
        return logPath(req, res, () => {
            expect(mockLog).toHaveBeenCalled();
            expect(mockLog).toHaveBeenCalledWith(req.originalUrl || req.baseUrl);
        });
    });
});

describe('2) supportedCurrencies', () => {
    const req = httpMocks.createRequest({
        method: 'GET', 
        url:'/api/currencies'
    });
    const res = httpMocks.createResponse();

    it('Debe guardar en res.locals.currencies un array de divisas (EUR, USD)', () => {
        return supportedCurrencies(req, res, () => {
            expect(res.locals.currencies).toBeInstanceOf(Array);
            expect(res.locals.currencies).toEqual(expect.arrayContaining(["EUR", "USD"]));
        });
    });
});
