const router = require('nordic/ragnar').router();

// Ejercicio 3 - Query

let products = [
    {
        name: "Mouse",
        price: 4598,
        stock: 30,
    },
    {
        name: "Notebook",
        price: 2598,
        stock: 30,
    },
    {
        name: "Macbook",
        price: 9898,
        stock: 0,
    },
];

/**
Utilizando el array de productos detallado arriba, vamos a implementar
un endpoint en nuestra app que nos permita filtrar los productos según 
los siguientes criterios recibidos por query:

1. Nombre: nos devolverá los productos cuyo nombre contenga el texto que 
pasamos por parámetro (QueryString).

2. Precio: Nos devolverá los productos cuyo precio se encuentre dentro del 
rango definido por parámetro (QueryString).

3. Stock: Nos devolverá sólo los productos que tienen stock.

NOTA: Estar atentos a los res.json y los bloques if/else. Para estar seguros, 
ponerle un return a cada res.json o corroborar que no quede ningún res fuera 
de un if/else.

********************************************************
Despues de implementar el código, correr el comando 
`npm run test:unit:watch products-query-route` y comprobar 
que pasan todos los tests.
********************************************************/

// EJERCICIO
router.get('/', (req, res) => {
    const { name, minPrice, maxPrice } = req.query;
    let product = products.filter(x => x.stock > 0);

    if(name){
        product = products.filter(x => x.name.toUpperCase() === name.toUpperCase());
        if(minPrice && maxPrice){
            product = products.filter(x => x.name.toUpperCase() === name.toUpperCase() && x.price >= minPrice && x.price <= maxPrice);
            res.json(product);
        }
        res.json(product);
    } else if(!name && !minPrice && !maxPrice){
        res.json(product);
    } else {
        res.json('No se encontraron productos');
    }



    // let product = null;

    // if(!name && !minPrice && !maxPrice){
    //     product = products.filter(x => x.stock > 0);
    //     res.json({product});
    // } else if(name && minPrice && maxPrice){
    //     product = products.filter(x => x.name.toUpperCase() === name.toUpperCase() && x.price >= minPrice && x.price <= maxPrice);
    //     res.json({product});
    // } else if(name && !(minPrice || maxPrice)){
    //     product = products.filter(x => x.name.toUpperCase() === name.toUpperCase());
    //     res.json({product});
    // } else if(minPrice && maxPrice && !name){
    //     product = products.filter(x=> x.price >= minPrice && x.price <= maxPrice);
    //     res.json({product});
    // } else {
    //     res.json('No se encontraron productos');
    // }
})

/* INICIO EXPLICACIÓN


// PARAMS
// https://dev.mercadolibre.com.ar:8443/api/products-query/400/facu
// router.get('/:id/:name', (req, res) => {
//     const { id, name } = req.params;
//     res.json({ id, name });
// })



// QUERY STRING 
// https://dev.mercadolibre.com.ar:8443/api/products-query?id=400&name=facu
// router.get('/', (req, res) => {
//     const { id, name } = req.query;
//     res.json({ id, name });
// })

FIN EXPLICACIÓN */

module.exports = router;