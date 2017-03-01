const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log(__dirname)
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

var db

MongoClient.connect('mongodb://julienthibeaut:lollol12@ds157799.mlab.com:57799/crud_app', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
