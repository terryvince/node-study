const App = require('./router')
const fs = require('fs')
const ejs = require('ejs')
const MongoClient = require('mongodb').MongoClient

const dburl = 'mongodb://localhost:27017'

let app = new App()

app.get('/', function (req, res) {
  res.send('index')
})

app.get('/readData', async function (req, res) {
    let client = await MongoClient.connect(dburl,{useNewUrlParser: true})
    const db = client.db('test')
    console.time('find')
    await db.collection('student').find({},{limit:1000000}).toArray().then(data=>{
        console.timeEnd('find')
        console.log(data.length)
        ejs.renderFile('./views/login.html',{data:data}, (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.send(data)
        })
    }).catch(err=>{
        console.log(err)
    })
    client.close()
})

app.get('/writeData', async function (req, res) {
    let client = await MongoClient.connect(dburl,{useNewUrlParser: true})
    const db = client.db('test')
    let arr = [];
    for(let i = 4000000; i<5000000;i++ )
    {
        arr.push({name:'hzz'+i,sex:i&1,age:i})
    }
    console.time('insert')
    await db.collection('student').insertMany(arr).then(result=>{
        console.timeEnd('insert')
        console.log(result.length)
    }).catch(err=>{
        console.log(err)
    })
    client.close()
    res.send('writeData')
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
