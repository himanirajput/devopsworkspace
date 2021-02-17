#!/bin/bash
var1="Hello World"
echo $var1

num1=17
((result=($num1/7)))   #mathematical operation
echo $result

echo $num1/7 | bc 