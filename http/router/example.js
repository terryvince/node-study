var http = require('http/router/index');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello world!');
}).listen(8080);
