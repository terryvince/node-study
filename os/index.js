const os = require('os')

console.log('arch',os.arch())       // arch    x64    arm64

console.log('cpus',os.cpus())       // 每个cpu核的信息

console.log('freemem',os.freemem())       // 系统剩余内存，可用内存

console.log('totalmem',os.totalmem())       // 系统总内存

console.log('hostname',os.hostname())       // 主机名

console.log('loadavg',os.loadavg())       // 仅在 Linux 和 macOS 上返回有意义的值，返回操作系统对平均负载的计算。

console.log('networkInterfaces',os.networkInterfaces())       // 返回每个网络接口的信息，相当于 cmd里的ipconfig,或者linux shell里的ifconfig

console.log('platform',os.platform())       // nodejs编译平台   darwin|freebsd|linux|openbsd|win32等  darwin是苹果公司开发的unix操作系统，是macOS的基础

console.log('release',os.release())       // 操作系统的版本号

console.log('tmpdir',os.tmpdir())       // 临时文件夹路径

console.log('homedir',os.homedir())       // 当前用户的主目录的路径。   '/Users/joe'

console.log('type',os.type())       // 操作系统的类型  Linux|Darwin（macos）|Windows_NT（window）

console.log('uptime',os.uptime())       // 系统自启动以来的运行时长

console.log('userInfo',os.userInfo())       // 返回当前用户信息,返回的对象包含 username、 uid、 gid、 shell 和 homedir。 在 Windows 上，则 uid 和 gid 字段为 -1，且 shell 为 null。