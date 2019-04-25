var cluster = require('cluster');
var http = require('http/router/index');
var numCPUs = require('os').cpus().length;
//
// process.env.NODE_CLUSTER_SCHED_POLICY='rr';
// if (cluster.isMaster) {
//     console.log("master start...");
//
//     // Fork workers.
//     for (var i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }
//
//     // //当新的工作进程被新建（fork）时触发
//     // cluster.on('fork', (worker) => {
//     //     timeouts[worker.id] = setTimeout(errorMsg, 2000);
//     // });
//     //
//     // //当一个工作进程调用listen()后，工作进程上的server会触发'listening' 事件，同时主进程上的 cluster 也会被触发'listening'事件。
//     // cluster.on('listening',function(worker,address){
//     //     console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
//     // });
//
//     //有子进程退出时触发
//     cluster.on('exit', function(worker, code, signal) {
//         console.log('worker ' + worker.process.pid + ' died');
//         cluster.fork();
//     });
//
//     // //主进程与子进程ipc通道断开触发
//     // cluster.on('disconnect', (worker) => {
//     //     console.log(`The worker #${worker.id} has disconnected`);
//     // });
//     //
//     // //当cluster主进程接收任意工作进程发送的消息后被触发
//     // cluster.on('message', (worker, message, handle) => {
//     //     if (arguments.length === 2) {
//     //         handle = message;
//     //         message = worker;
//     //         worker = undefined;
//     //     }
//     // })
//     //当工作进程新建并运行时触发
//     cluster.on('online', (worker) => {
//         console.log('工作进程：',worker.process.pid,'已运行！');
//     });
// } else {
//     http.createServer(function(req, res) {
//         console.log('请求被工作进程',cluster.worker.process.pid,'处理');
//         res.writeHead(200);
//         res.end("hello world\n");
//         console.log(+new Date());
//     }).listen(9001);
// }


http.createServer(function(req, res) {
    console.log('请求被工作进程',process.pid,'处理');
    res.writeHead(200);
    res.end("hello world\n");
    console.log(+new Date());
}).listen(9001);
