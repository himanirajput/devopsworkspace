const models = require('../model/product')
class ProductRepository{
    // insert into products values (?,?,?,?,?)
    saveNewProduct(product){
        return new models.instance.products(product).saveAsync();
    }
    loadAllProducts(){
        //models.instance.products.find({'product_name': 'Iphone12mini'},{ raw: true, allow_filtering: true }, function(err, products){
          
            models.instance.products.find({},{ raw: true, allow_filtering: true }, function(err, products){if(err) throw err;
            //people is an array of model instances containing the persons with name `John`
            console.log('Found ', products);
        });
    }
    loadProductsByPriceGt(productprice){
        const query={
            product_id:1,
            price:{'$gt':productprice}
          
        }
          models.instance.products.find(query,{ raw: true, allow_filtering: true },(err,result)=>{
              if(err){
                  console.log(err)
              }
              console.log(result)
          })
    }

    remove(id){
        const query={
            product_id:id
                      
        }
          models.instance.products.find(query,(err,result)=>{
              if(err){
                  console.log(err)
              }
              console.log('delete',result)
              
          })
    }
}
const repository=new ProductRepository();
//repository.saveNewProduct({product_id:1,product_name:'Iphone12',product_code:'Iphone12mini',price:71459,image_url:'http://images.com/apple',rating:4.2})
//.then(product=>console.log(product))
//repository.loadProductsByPriceGt(50000.0)  
//const repository = new ProductRepository();
 //repository.loadAllProducts()   
 repository.remove(1);








/*const models=require('../model/product')

class ProductRepository{
    saveNewProduct(product){
        return new models.instance.products(product).saveAsync();
    }
    loadAllProducts(){
        return models.instance.products.find();
    }
    loadProductsByPriceGt(price){
        const query={
            product_id:1,
            price:{'$gt':5000,'$lte':80000.0},
            $orderby:{'$asc':'price'}
        }
        return new models.instance.products.find(query);
    }
    }
    
const repository=new ProductRepository();
//repository.saveNewProduct({product_id:1,product_name:'Iphone12',product_code:'Iphone12mini',price:71459,image_url:'http://images.com/apple',ratings:4.2})
//.then(product=>console.log(product))
repository.loadProductsByPriceGt(50000.0).then(products=>console.log(products))

*/