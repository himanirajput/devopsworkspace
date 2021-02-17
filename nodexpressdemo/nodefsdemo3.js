const fs=require('fs')
const readline=require('readline')

let values=[];


fs.readFile('data.txt','UTF-8',(error,data)=>{
    if(error){
        throw error;
    }
   // values.push(data)
   // v=values.replace(/[\n\r]/g,'')
    //console.log(v)
    const lines=data.toString().trim().split('\r\n');
    const numbers=lines.map(Number)
    const odd=numbers.filter(number=>number%2===1)
     console.log(odd)
    
        })
    

/*const r=readline.createInterface({
    input:fs.createReadStream('data.txt'),
    output:process.stdout,
    terminal:false
});
r.on('line',(line)=>{
    if(line%2==0)
    console.log(line);
});*/