const http = require('http');

const server = http.createServer((req,res)=>{
  const url = req.url;
  const method = req.method;
  if(url === '/home' || url === '/'){
    res.write('<h1>Welcome home</h1>')
    return res.end();
  }
  else if(url === '/about'){
    res.write('<h1>Welcome to about us page.</h1>')
    return res.end();
  }
  else if(url === '/node'){
    res.write('<h1>Welcome To projects</h1>')
    return res.end();
  }
  else{
    res.write('<h1>Page does\'nt exist.</h1>')
    return res.end();
  }
});
 
server.listen(3000,'127.0.0.1',()=>{
  console.log("Server is running")
});

