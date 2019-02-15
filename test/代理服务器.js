const http = require('http');
const request = require('request');
http.createServer(function (req,res) {
    let url = 'https://www.baidu.com'+ req.url;
    req.pipe(request(url)).pipe(res);
}).listen(8086);
