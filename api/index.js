/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const products = require('./1-products/products');
const currencies = require('./2-currencies/currencies');

/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/products', products);
router.use('/currencies', currencies);

/**
 * Expose API router
 */
module.exports = router;
