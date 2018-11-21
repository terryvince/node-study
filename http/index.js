const App = require('./router')
const fs = require('fs')

let app = new App()

app.get('/', function (req, res) {
  res.send('index')
})

app.get('/login', async function (req, res) {
    fs.readFile('./views/login.html', (err, data) => {
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
