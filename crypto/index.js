const crypto = require('crypto');
let md5 = crypto.createHash('md5');
let password = '123456';
console.log('明文：123456');
console.log('md5:',md5.update(password).digest('hex'));

/*
let pd = md5.update('ffifdyop').digest('hex');
console.log(Buffer.from(pd,'hex').toString());  // 'or'6�]��!r,��b 存在sql注入
*/

let sha256 = crypto.createHash('sha256');
console.log('sha256:',sha256.update(password).digest('hex'));

let sha1 = crypto.createHash('sha1');
console.log('sha1:',sha1.update(password).digest('hex'));
