const fs = require('fs');

// 读入文件内容
fs.readFile('demofile1.html', function(err, data) {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

// 追加文件内容，不存在创建
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// 创建空文件
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// 写入文件内容，存在覆盖
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// 删除文件
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

// 重命名文件
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});

