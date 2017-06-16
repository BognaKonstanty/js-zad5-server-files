var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile("./index.html",'utf-8', function(err, data) {
         response.write(data);
         response.end();
});

           } else {
            fs.readFile("./mewy.jpeg", function(err, data) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.end(data);
          });
            response.statusCode = 404;            
    }
});

server.listen(8080);