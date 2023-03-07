const connect2Mongo = require('./db')

const express = require('express')
const app = express()
const port = 3000
connect2Mongo();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})