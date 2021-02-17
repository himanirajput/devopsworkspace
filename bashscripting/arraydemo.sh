arr=("Java" "Python" "NodeJs")
size=${#arr[@]}
echo $size

val1=${arr[1]}
echo $val1

index=2
val2=${arr[${index}]}
echo $val2

for ((i=0; i< $size; i++));do
        echo ${arr[${i}]}
 done       