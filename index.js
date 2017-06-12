var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile("/BognaDEV/js-zad5/index.html",'utf-8', function(err, data) {
        console.log(data);
});

        response.write('data');

            response.end();
    } else {
            fs.readFile("/BognaDEV/js-zad5/cat.jpg", function(err, data) {
            console.log(data);
          });
            response.statusCode = 404;
            response.write("/BognaDEV/js-zad5/cat.jpg");
            response.end();
    }
});

server.listen(8080);