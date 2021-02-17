const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(201,{'Content-Type':'text/html'}) //writehead writes to header of http
    res.write('<h2>Welcome To NodeJs Server</h2>')
    res.end()
})
server.listen(8888,"localhost",()=>{
    console.log('server ready')
})














//HTTP Status codes
//100 serries(101,102,------,110)(request is partially processed)
//200 series(200-------230) (Success)
//300 series(300-----320)  (redirect)
//400 series(400-----428)(error on client side)
//500(500-------532)(error on server side)