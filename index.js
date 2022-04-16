require("dotenv").config();
const express = require("express");
const connectToDb = require('./database/db')

const app = express();
const port = process.env.PORT || 3000;

connectToDb();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Sevidor rodando em http://localhost: ${port}`)
);
