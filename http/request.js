const https = require('https');
const querystring = require('querystring');
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

async function request(url,data,options){
    let {data:body,...option} = options
    body = data || body
    return new Promise((resolve,reject)=>{
        const req = https.request(url,{
            ...option
        },res=>{
            let result;
            res.on('data', chunk=>{
                // console.log(chunk,'\n\n\n')  buffer
                result+=chunk  // + 会把buffer自动转字符串
            })
            res.on('end',()=>{
                resolve(result)
            })
        })
        req.on('error',e=>{
            reject(e)
        })
        body && req.write(querystring.stringify(body))
        req.end();
    })
}

// request('http://www.baidu.com',{hello:111},{
//     method:'GET'
// }).then(res=>{
//     console.log(res)
// })

request('https://www.baidu.com',{hello:111},{
    method:'GET',
    // contentType:'application/x-www-form-urlencoded'
}).then(res=>{
    console.log(res)
})