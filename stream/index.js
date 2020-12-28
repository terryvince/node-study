/**
 * 使用流，可以逐个片段地读取并处理（而无需全部保存在内存中）, readFile是一次性加载所有内容,容易爆仓
 * Node.js 的 stream 模块 提供了构建所有流 API 的基础。所有的流都是 EventEmitter 的实例
 * 流的分类
 * Readable     可读流
 * Writable     可写流
 * Duplex       双工流,可读可写
 * Transform    类似双工流,但其输出是其输入的转换的转换流
 */
var rs = fs.createReadStream('./test.txt');
var ws = fs.createWriteStream('./');
 
// 防爆仓处理
rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {   // 如果可写流还没流尽,也就是可读流速度比可写流快的时候,暂停可读流流动
        rs.pause();
    }
});
 
rs.on('end', function () {
    ws.end();
});
 
ws.on('drain', function () {    // 直到可写流流尽,才恢复可读流
    rs.resume();
});

// 上述与pipe等价,简单写法
// rs.pipe(ws)


// 文件流响应
const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(__dirname + '/data.txt')
    stream.pipe(res)
})


// 以下常见的流
//process.stdin stdout stderr               进程
//fs.createReadStream createWriteStream     文件
//net.connect                               链接
//http.request
//zlib.createGzip createGunzip createDeflate createInflate

// 创建流
const Stream = require('stream')

const readableStream = new Stream.Readable({ // 创建可读流,需要实现read
  read() {}
})
// readableStream._read = () => {} // 也可以这样实现


const writableStream = new Stream.Writable(     // 创建可写流
//     {
//     write(){}
// }  // 也可以这样实现
)
writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')   // 发送数据到可读流
readableStream.push('ho!')

writableStream.write('hey!\n')  // 发送数据到可写流

writableStream.end()           // 通知可写流完成