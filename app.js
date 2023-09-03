const http = require('http');

const server = http.createServer((req,res)=>{
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('My name is sunil');
});

server.listen(3000,'127.0.0.1',()=>{
  console.log("Server is running")
});

