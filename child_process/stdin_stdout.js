// process.on('exit', function(code) { console.log(code) });
// process.stdin.setEncoding('utf8');
//
// process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(`数据: ${chunk}`);
//     }
// });
//
// process.stdin.on('data',(input)=>{
//     input = input.toString().trim();
//     if (['Y', 'y', 'YES', 'yes'].indexOf(input) > -1){
//        // console.log(11)
//     }
//     if (['N', 'n', 'NO', 'no'].indexOf(input) > -1) {
//         process.exit(0);
//     }
// });
//
// process.stdin.on('end', () => {
//     process.stdout.write('结束');
// });


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('resume', () => {
    console.log('Readline 被恢复。');
});

rl.on('pause', () => {
    console.log('Readline 被暂停。');
});

rl.on('close', () => {
    console.log('Readline 被关闭。');
});

rl.on('line', (input) => {
    console.log(`接收到：${input}`);
});


async function print(strs,i){
    if(i>=strs.length){
        rl.close();
        return;
    }
    rl.write(strs[i]);
    setTimeout(print.bind(this,strs,i+1),500);
}
print('我是一句模拟输入的话',0);
