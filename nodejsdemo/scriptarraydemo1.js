let products =[
    {
        productId:1,
        productName:'Iphone',
        price: 78567.5,
        description: 'IPhone12'
        
    },
    {
        productId:3,
        productName:'MacbookPro',
        price: 178567.5,
        description: 'MacbookproPentium Processor 9'
        
    },
    {
        productId:4,
        productName:'Ipad',
        price: 48567.5,
        description: 'Iad12'
        
    }
]
//console.log(products.sort(function(product1,product2){return product1.price-product2.price}));
//console.log(products.sort((product1,product2)=> product1.price-product2.price))
//console.log(products.sort((product1,product2)=>product1.productName.localeCompare(product2.productName)))

console.log(products.filter(product=>product.price>50000).map(product=>product.price).reduce((accumulator,currentValue)=>accumulator+=currentValue))