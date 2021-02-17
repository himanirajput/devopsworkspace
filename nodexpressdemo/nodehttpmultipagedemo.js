const http=require('http');
const fs=require('fs');
const url=require('url');
const server=http.createServer((req,res)=>{
    const fileName=`./mods/${req.url}`
    fs.readFile(fileName,'UTF-8',(err,html)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'}); //Content-Type=mime type
            res.end('<h2>Page Not Found</h2>')
        }
        else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(html);
        res.end();
        }
    })

})
server.listen(8880,'localhost',()=>{
    console.log('server started')
})
