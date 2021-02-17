const Rectangle=require('./rectangle')
const Triangle=require('./triangle')
class Main{
    static display(shape){
        console.log('Area of ',shape.toString(),' is ',shape.calculateArea())
    }
}
const rectangle=new Rectangle(23.3,34.5);
const triangle=new Triangle(23.3,34.5);
Main.display(rectangle)
Main.display(triangle)