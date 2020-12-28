/**
 * Buffer 是内存区域。
 * 表示在 V8 JavaScript 引擎外部分配的固定大小的内存块（无法调整大小）.
 * 可以将 buffer 视为整数数组，每个整数代表一个数据字节。
 * Buffer 被引入用以帮助开发者处理二进制数据。
 */

// 创建buffer的三种方式
const buf = Buffer.from('Hey!') // 按字符串分配
// Buffer.from(array)
// Buffer.from(arrayBuffer[, byteOffset[, length]])
// Buffer.from(buffer)
// Buffer.from(string[, encoding])

const buf = Buffer.alloc(1024)  // 按字节分配一块内存区域,用0填充
const buf = Buffer.allocUnsafe(1024)  // 按字节分配,不会初始化,可能含有敏感数据,但分配速度快

// 访问
const buf = Buffer.from('Hey!')
console.log(buf[0]) // 索引访问,跟数组差不多,也可以访问到length,也是总字节数
console.log(buf.toString()) // 转字符串


// 修改buffer
buf.write('Hey!')
buf[1] = 111 //o

// 复制
let bufcopy = Buffer.alloc(4) //分配 4 个字节。
buf.copy(bufcopy,0,0,2)       // 复制到bufcopy,可以指定起始位置,第四个参数指定长度
bufcopy.toString()     // 'He'

// 切片
buf.slice(0).toString() //Hey!
