const React = require('react');
const View = require('./view');

exports.render = function render(req, res){

  const Home = props => <View {...props} />

  res.render(Home, {
    message: "Hello World",
  });
}