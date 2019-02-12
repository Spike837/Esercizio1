var http = require('http');
var sever = http.createServer(function (req, res) {
    
    var a = 3
    var b= 3;

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola ' + (+a+b))
  
})
console.log(server._events.connection);



server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');



var filename 
setTimeout(e=>{
filename = path.basename('/home/tirocinio19/lorenzo/test.js', '.js')},5000000)
 
console.log(filename);





 