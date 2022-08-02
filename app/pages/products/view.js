const React = require('react');

function View(props){
  const { products } = props;

  return(
    <>
      {
        products.length > 0 && products.map(pct => <li>{pct.title}</li>)
      }
    </>
  )
}

module.exports = View