const {exec} = require('child_process');
//执行shell命令
// exec('echo hello %temp%',(err,stdout,stderr)=>{
//    if(err){
//     console.error(`执行出错: ${error}`);
//     return;
//    }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
// });

exec('git add .',(err,stdout,stderr)=>{
    if(err){
     console.error(`执行出错: ${error}`);
     return;
    }
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
 });

//执行程序
const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', (data) => {
    console.log(data.toString());
});

bat.stderr.on('data', (data) => {
    console.log(data.toString());
});

bat.on('exit', (code) => {
    console.log(`子进程退出码：${code}`);
});

//执行node程序专属
const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
    console.log('父进程收到消息', m);
});

// 使子进程输出: 子进程收到消息 { hello: 'world' }
n.send({ hello: 'world' });
