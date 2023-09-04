const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    const text = fs.readFileSync('message.txt')
    res.write('<html><p>'+ text +'</p><form action="/message" method="post"><input type="text" name="message" /> <input type="submit" /></form></html>')
    return res.end();
  }
  if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end',()=>{
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
      const message = parsedBody.split("=")[1];
      fs.writeFileSync('message.txt',message);
    })
    
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end()
  }
  res.setHeader('Content-type','text/html');
  res.write('<h1>This is message page</h1>')
  res.end();
});
 
server.listen(3000,'127.0.0.1',()=>{
  console.log("Server is running")
});

