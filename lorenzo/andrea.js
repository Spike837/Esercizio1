var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Ciao "+filename);
  //path.basename('/home/tirocinio19/Andrea_tirocinio/andrea.js', '.js');
})
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
var path = require('path');

var filename = path.basename('/home/tirocinio19/Andrea_tirocinio/andrea.js', '.js');
console.log(filename);