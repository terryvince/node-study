//Access-Control-Allow-Origin :http://www.baidu.com;            //允许的域名（ * 所有域）
//Access-Control-Allow-Methods : POST;                          //允许的方法
//Access-Control-Allow-Headers : x-requested-with , content-type; //服务器允许的头信息
// ---------------------
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');                     //作为writeHeader
    res.setHeader('X-Foo', 'bar');
    // res.statusCode = 200
    res.writeHead(200, { 'Content-Type': 'text/plain' });           //setHeader会与writeHead合并,优先使用writeHead的值
    res.end('ok');
});
