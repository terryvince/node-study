const App = require('./router')
const fs = require('fs')
const ejs = require('ejs')

let app = new App()

app.get('/', function (req, res) {
  res.send('index')
})

app.get('/login', async function (req, res) {
    ejs.renderFile('./views/login.html',{data:[{name:'hzz',sex:0,age:18}]}, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.send(data)
    })
})

app.post('/login', function (req, res) {
  console.log(req.body)
  res.send('success')
})

app.listen(3002, err => {
  if (err) {
    console.log(err)
  }
  console.log('server running at http://localhost:3002')
})
