const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send(["Tony","Lisa","Michael","Ginger","Food"]);
});


