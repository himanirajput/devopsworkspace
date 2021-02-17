const products = require('./products')
//console.log(products.sort(function(product1,product2){return product1.price-product2.price}));
//console.log(products.sort((product1,product2)=> product1.price-product2.price))
//console.log(products.sort((product1,product2)=>product1.productName.localeCompare(product2.productName)))

console.log(products.filter(product=>product.price>50000).map(product=>product.price).reduce((accumulator,currentValue)=>accumulator+=currentValue))