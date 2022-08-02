const React = require('react');
const View = require('./view');
const Service = require('../../../services/productsService');

exports.fetchProducts = function fetchProducts(req, res, next){
  const { name, limit } = req.platform;
  const siteId = req.platform;
  Service.getProducts('MLA', 'tablet', 10)
    .then(data =>{
      res.locals.products = data;
      next();
    })
    .catch(error => next(error))
}

exports.render = function render(req, res){

  const Products = props => <View {...props} />

  res.render(Products, {
    products: res.locals.products
  });
}