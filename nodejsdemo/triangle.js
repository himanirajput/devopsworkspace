const Shape=require('./shape')
class Triangle extends Shape{
    constructor(width,height){
        super(width,height);

    }
    calculateArea(){
       // console.log("Triangle")
        return 0.5*this.width*this.height
    }
    toString(){
        return "Triangle"
    }
}
module.exports=Triangle