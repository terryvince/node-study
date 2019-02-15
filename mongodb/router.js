const url = require('url/url')
const http = require('http')

module.exports = function () {
  let self = this
  let handleMap = {get: {}, post: {}}
  this.get = function (pathname, callback) {
    handleMap.get[pathname] = callback
  }
  this.post = function (pathname, callback) {
    handleMap.post[pathname] = callback
  }
  this.handle = function (req, res) {
    let route = url.parse(req.url).pathname
    console.log(route)
    let method = req.method.toLowerCase()
    if (!handleMap[method][route]) {
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
      res.end('<h1>404</h1>')
      return
    }
    res.send = function (data) {
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
      res.end(data)
    }
    if (handleMap[method][route] && method === 'get') {
      req.query = url.parse(req.url, true).query
      handleMap[method][route](req, res)
      return
    }
    if (handleMap[method][route] && method === 'post') {
      let postData = ''
      req.on('data', chunk => {
        postData += chunk
      })
      req.on('end', (err, chunk) => {
        if (err) {
          console.log(err)
        }
        req.body = postData
        handleMap[method][route](req, res)
      })
    }
  }
  this.listen = function (port, callback) {
    http.createServer(self.handle).listen(port, callback)
  }
}
