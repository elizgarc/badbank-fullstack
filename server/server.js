const dotenv = require('dotenv')
const db = require('./db/db.js')
const express = require('express')
const app = express()
const port = 8080
const authroutes = require("./routes/authroutes")
const {register} = require("./controllers/user.controller")

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.post("/register",register) 
app.use("/auth",authroutes)

app.listen(port, () => {
  console.log(`Badbank app listening on port ${port}`)
})