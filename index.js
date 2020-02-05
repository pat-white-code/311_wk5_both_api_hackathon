const express = require('express')
const app = express()
// const bodyParser = require("body-parser");
const usersRouter = require('./routes/employees');
const port = process.env.PORT || 4001;

// app.use(bodyParser.json())
app.use('/emoloyees', usersRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });