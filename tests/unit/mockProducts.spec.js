const products = require('../../utils/mockProducts');

describe('Los productos que vamos a utilizar en el endpoint /api/products', () => {
    it('1) Son un array de productos', () => {
        expect(products).toBeInstanceOf(Array);
    });

    it('2) Son cuatro en total', () => {
        expect(products.length).toBe(4);
    });

    it('3) Cada uno tiene las propiedades id, title, description, price y quantity', () => {
        ['id', 'title', 'price', 'description', 'quantity'].forEach((p) => {
            expect(products[0]).toHaveProperty(p);
            expect(products[1]).toHaveProperty(p);
            expect(products[2]).toHaveProperty(p);
            expect(products[3]).toHaveProperty(p);
        });
    });
});