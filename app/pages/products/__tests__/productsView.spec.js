const React = require('react');
const ProductsView = require('../view');
const { render, screen } = require('@testing-library/react');
const mockProducts = require('../../../../tests/utils/products.json');

describe('Ejercitación Integradora - La View de Products', () => {
    let component;
    const i18n = { gettext: text => text };

    beforeEach(() => {
        component = render(<ProductsView i18n={i18n} products={mockProducts}/>);
    });

    it('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();        
    });

    it('2) Renderiza una lista de productos', () => {
        const products = screen.getAllByRole('listitem');
        expect(products[0]).toHaveTextContent(/motorola/i);
        expect(products.length).toBe(10);
    });
});
