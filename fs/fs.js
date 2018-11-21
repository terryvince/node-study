const fs = require('fs')
const {resolve} = require('path')

// 异步递归遍历目录
function eachFiles (root, callback) {
  fs.readdir(root, (err, files) => {
    err && console.log(err)
    files.forEach(name => {
      let curPath = resolve(root, name)
      fs.stat(curPath, (err, stats) => {
        err && console.log(err)
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

eachFiles('../src/api', (path) => {
  console.log(path)
})
