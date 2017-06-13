var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile("/BognaDEV/js-zad5/index.html",'utf-8', function(err, data) {
        console.log(data);
         response.write(data);
         response.end();
});

       
            
    } else {
            fs.readFile("/BognaDEV/js-zad5/mewy.jpeg", function(err, data) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            console.log(data);
            response.end(data);
          });
            response.statusCode = 404;
            //response.write(data);
            
    }
});

server.listen(8080);