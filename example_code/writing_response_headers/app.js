var http = require ('http');
var fs = require ('fs');

http.createServer(function(requrest,response) {
  response.writeHead(200, {
    'Content-Type':'text/html'
  });

  fs.readFile('index/html', function(error, content){
    response.write(content);
    resonse.end();
  });

}).listen(8080);
