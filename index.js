console.log("Whrrr, beginning application...");

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(
        200,
        {
            'Content-Type' : 'text/plain'
        }
    );


}).listen(8081);

console.log("Running server locally.")