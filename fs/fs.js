const fs = require('fs');
const {resolve} = require('path');

console.time('timer');


// 异步递归遍历目录 2525项 150ms
function eachFiles (root, callback) {
  fs.readdir(root, (err, files) => {
    err && console.log(err);
    files.forEach(name => {
      let curPath = resolve(root, name);
      fs.stat(curPath, (err, stats) => {
        err && console.log(err);
        if (stats.isFile()) {
          callback && callback(curPath)
        }
        if (stats.isDirectory()) {
          eachFiles(curPath, callback)
        }
      })
    })
  })
}
eachFiles('../', (path) => {
  console.log(path);
});



// 同步递归遍历目录 2525项 耗时 235.145ms
// function eachFilesSync (root) {
//   let results = [];
//   +function getfiles(root){
//       let dirs = fs.readdirSync(root);
//       dirs.forEach(name=>{
//           let curPath = resolve(root, name);
//           let stats = fs.statSync(curPath);
//           if(stats.isFile()){
//             results.push(curPath);
//           }
//           if(stats.isDirectory()){
//             getfiles(curPath);
//           }
//       })
//   }(root);
//   return results;
// }
// console.log(eachFilesSync('../').length);



process.on('exit',function (code) {
    console.timeEnd('timer');
});
