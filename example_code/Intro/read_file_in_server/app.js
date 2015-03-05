var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
  response.writeHead(200);
  fs.readFile('index.html', function(error,contents){
    response.end(contents);
  });
}).listen(8080);
