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


// 类 Unix 操作系统（Unix、 Linux、 macOS）上 child_process.execFile()执行效率更高，不需要衍生shell，直接执行
const { exec } = require('child_process');      // 衍生shell 执行命令
exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});

const { execFile } = require('child_process');
const child = execFile('notepad', ['c://users/admin/desktop/hello.txt'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});
