// index.js
const express = require("express");

const app = express();

var a = 1;
var b = 2;

var c = a + b;

app.get("/", (req, res) => {
  res.send("Hello World22");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
