const fs = require('fs');

let readStream = fs.createReadStream('./fs.js');
let writeStream = fs.createWriteStream('./fs_copy.js');

readStream.pipe(writeStream);

readStream.on('close',function () {
   console.log('readStream close')
});
readStream.on('open',function () {
    console.log('readStream open')
});
readStream.on('ready',function () {
    console.log('readStream ready')
});

writeStream.on('close',function () {
    console.log('writeStream close')
});
writeStream.on('open',function () {
    console.log('writeStream open')
});
writeStream.on('ready',function () {
    console.log('writeStream ready')
});

// writable close|drain|error|finish|pipe|unpipe

// readable close|data|end|error|readable

writeStream.on('finish',function () {
   console.log('writeStream finish')
});
readStream.on('data',function (data) {
    console.log('readStream data:',data);
});
