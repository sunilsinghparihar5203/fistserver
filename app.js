const http = require('http');

const routes = require('./routes')

const server = http.createServer(routes.handler);
 
server.listen(3000,'127.0.0.1',()=>{
  console.log("Server is running")
});

