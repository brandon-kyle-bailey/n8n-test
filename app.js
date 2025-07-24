const express = require("express");
const app = express();

const helloHandler = (req, res) => {
  console.log("blah");
  console.log("blah");
  res.json({ message: "Hello, world!" });
};

app.get("/hello", helloHandler);

module.exports = { app, helloHandler };
