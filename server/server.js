const dotenv = require('dotenv')

const express = require('express')
const app = express()
const port = 8080

dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Badbank app listening on port ${port}`)
})