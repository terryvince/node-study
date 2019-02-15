console.log('执行参数：',process.argv);        // 1 node安装路径   2 当前进程路径    3+  当前进程接收执行参数

// arch 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 或 'x64'
// platform 'aix' 'darwin' 'freebsd' 'linux' 'openbsd' 'sunos' 'win32'
console.log(`pid:${process.pid} ppid:${process.ppid}  cwd:${process.cwd()} arch:${process.arch} platform:${process.platform}`);

//process.chdir(directory)改变当前工作目录

console.log('env:',process.env);

// 自定义环境变量 window上不区分环境变量大小写 process.env.TEST = process.env.test
process.env.TEST = 'test';
console.log(process.env.TEST);
delete process.env.TEST;    // 删除自定义环境变量

//node --harmony script.js --version   返回['--harmony']  返回的是node的执行参数，而不是进程本身的参数
console.log('execArgv:',process.execArgv);

// 返回node的绝对路径
console.log('execPath:',process.execPath);

// 返回一个对象，包含内存的使用情况
console.log('memoryusage:',process.memoryUsage());

// process.nextTick(callback[, ...args])    在当前事件轮询队列的任务全部完成后立即执行，类似但不等同setTimeout(fn, 0)，会在任何io事件和定时器之前执行。

console.log('nextTick start');
process.nextTick((arg) => {
    console.log('nextTick end',arg);
},0);
console.log('nextTick start2');

console.log('node进程运行时长/秒：',process.uptime());


// 进程事件
process.on('beforeExit',function (exitCode) {
    console.log('进程退出前触发：',exitCode);
});

// 进程被关闭时触发，只能执行同步代码，异步代码将被忽略
process.on('exit', (code) => {
    console.log(`退出码: ${code}`);
});





// ipc 进程专用

console.log('ipc channel 的引用：',process.channel);

console.log('ipc channel 的链接状态：',process.connected);
//process.disconnect() 被调用后 process.connected为false，且不能通过process.send()发送消息

// 父进程调用process.disconnect()与子进程调用subprocess.disconnect()效果是一致的


// 父子进程ipc通道关闭时触发
process.on('disconnect',function (e) {
    console.log('ipc通道关闭：',e);
});


// 父子进程通信时使用
process.on('message',function (data) {
    console.log('进程收到的消息：',data);
});

//process.send(message[, sendHandle[, options]][, callback]) 给父进程发送消息

process.on('SIGHUP', () => {
    console.log('Got SIGHUP signal.');
});

// process.kill(process.pid, 'SIGHUP'); 终结进程，并给该进程发送信号,不存在，或者目标是进程组将抛出错误

// process.kill(pid, 0) 发送信号0可测试指定进程是否存在

// 设置进程退出码，当进程自然结束时，会给事件抛出退出码，推荐process.exitCode代替process.exit(1)
process.exitCode = 1;

// 进程主动退出，并返回code给事件，   多数情况不需要调用，如果有io等异步操作，会导致数据丢失，程序逻辑错误
// process.exit(1);
