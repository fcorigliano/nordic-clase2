const React = require('react');

function View(props){
  const { message } = props;

  return <h2>{message}</h2>
}

module.exports = View