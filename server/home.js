let http=require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/plain'})
response.write('Hello world')
response.end()
}).listen(3500)