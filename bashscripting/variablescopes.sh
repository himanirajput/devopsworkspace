num1=10
function MyFunc()
{
    num2=9
    echo "Inside myFunc $num1"
    echo "Inside myFunc $num2"
    echo "something"
}
 
#MyFunc
echo "Outside myFunc $num1"
echo "Outside myFunc $num2"
echo $MSG1
MyFunc                           #hoisting