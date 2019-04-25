const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
    a:1,
    b:[1,2]
});
/*
* 常用的content-type
*   text/xml
*   text/plain;charset=utf-8;  纯文本, 空格转换为 “+” 加号，但不对特殊字符编码
*   text/css
*   text/html
*   application/json
*   image/jpeg
*   audio/mp3
*   application/pdf
*   application/x-www-form-urlencoded   在发送前编码所有字符(默认，空格转换为 “+” 加号，特殊符号转换为 ASCII HEX 值）
*   multipart/form-data 不对字符编码,在使用表单上传的文件时，必须使用该值
*
* */
function get() {
    const options = {
        hostname:'www.baidu.com',
        header:'content-type:text/html;charset:utf-8',
        method:'GET'
    };
    const req = http.request(options,res=>{
        let data;
        res.on('data',chunk=>{
            data+=chunk;
        });
        res.on('end',()=>{
            console.info(data)
        })
    });
    req.on('error',e=>{
        console.error(e.message);
    });

    req.write(postData);
    req.end();
}

function post() {
    const options = {
        hostname:'www.baidu.com',
        // path:'/hello/qq.php',
        // port:'80',
        header:{
            'content-type':'appliction/x-www-form-urlencoded;charset:utf-8',
            'content-length':postData.length            //post请求最好加上数据的length，不然有可能会被服务器拒绝
        },
        method:'POST',
    };
    const req = http.request(options,res=>{
        let data='';
        res.on('data',chunk=>{
            data+=chunk;
        });
        res.on('end',()=>{
            console.info(data)
        })
    });
    req.on('error',e=>{
        console.error(e.message);
    });

    req.write(postData);
    req.end();
}
post();
