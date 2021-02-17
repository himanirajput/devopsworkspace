function Hello()
{
    echo "My first Function"
}
Hello
Hello

: 'MyFunc2()
{
    result=$(($1+$2))
    echo "Result is $result"
}
MyFunc2 10 30'

function MyFunc2()
{
    result1=$(($1+$2))
    echo "hello"
    echo $result1
    
}

value=$(MyFunc2 10 30)
echo "Addition of two numbers is $value"
