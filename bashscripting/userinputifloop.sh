#!/bin/bash
echo "Enter a number"
read num
if [ $num -lt 10 ]
then
    echo "Your num is $num and is less than 10"
elif [ $num -lt 20 ]
then 
    echo "your num is $num and is less than 20"

  else   
    echo "your num is $num and not recognised"
fi  
