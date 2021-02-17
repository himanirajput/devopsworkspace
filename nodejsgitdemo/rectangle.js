const Shape=require('./shape')
class Rectangle extends Shape{
    constructor(width,height){
        super(width,height);

    }
    calculateArea(){
        //console.log("Rectangle")
        return this.width*this.height
    }
    toString()
    {
        return "Rectangle"
    }
}
module.exports=Rectangle