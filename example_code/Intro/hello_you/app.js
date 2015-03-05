var http = require('http');

http.createServer(function(requrest, response){
  response.writeHead(200);
  response.write("Hello, this is Lyman");
  response.end();
}).listen(8080);

console.log('Listening on port 8080...');
