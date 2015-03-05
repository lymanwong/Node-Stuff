//Add a second 'request' handler to the HTTP server.

var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Lyman!");
  response.end();
});

//start second request
server.on('request', function(request, response){
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  console.log("New request coming in...");
});
//end second request

server.listen(8080);
