const fs = require("fs");
const path = require("path");
const {promisify} = require('util');
main()

async function main(){
     await copyDir(path.join(__dirname,'./input'),path.join(__dirname,'./output'))
     let files = fs.readdirSync(path.join(__dirname,'./output'))
     console.log('文件数量：',files.length,files)
     
}

// 复制目录
function copyDir(srcDir, outDir) {
    const { resolve, join } = path;
    srcDir = resolve(srcDir); // 改成全路径
    outDir = resolve(outDir); // 改成全路径

    function copy(srcDir, outDir, callback) {
      fs.readdir(srcDir, (err, files) => {
        if (err) return callback(err);
        var count = 0;
        var checkEnd = function () {
          ++count == files.length && callback();
        };

        files.forEach((file) => {
          var curPath = resolve(srcDir, file);

          fs.stat(curPath, (err, stats) => {
            if (err) return callback(err);
            let tempPath = curPath.replace(srcDir, ""); //取得目录层级

            let fullPath = join(outDir, tempPath);

            if (stats.isDirectory()) {
              fs.mkdir(fullPath, function (err) {
                //创建目录后继续复制该目录下的文件
                if (err) return callback(err);
                copy(curPath, fullPath, checkEnd);
              });
              return;
            }

            let readable = fs.createReadStream(curPath);
            let writable = fs.createWriteStream(fullPath);
            readable.pipe(writable);
            checkEnd();
          });
        });
        //为空时直接回调
        files.length === 0 && callback();
      });
    }

    return new Promise((resolve, reject) => {
      fs.stat(outDir, (err) => {
        if (err && err.code === "ENOENT") {
          // 如果输出目录不存在就先创建目录
          fs.mkdirSync(outDir);
        }
        copy(srcDir, outDir, (err) => {
            if(err) return reject(err)
            resolve()
        })
      })
    })
  }