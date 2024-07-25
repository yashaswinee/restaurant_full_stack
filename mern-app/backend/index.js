const express = require('express')
const app = express()
const port = 5000

// for CORS error ->
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json());

const initaliseConnection = require('./db')
initaliseConnection();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', require("./routes/Signup"));
app.use('/api', require("./routes/Login"));
app.use('/api', require("./routes/DisplayFoodItems"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})