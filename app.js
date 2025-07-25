const express = require("express");
const app = express();

const helloHandler = (req, res) => {
  res.json({ message: "Hello, world!" });
};

app.get("/hello", helloHandler);

module.exports = { app, helloHandler };
