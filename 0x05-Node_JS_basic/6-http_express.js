/* eslint-disable */
const express = require('express');

app = express();

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});


app.listen(1245, () => {
  console.log("Listening on port 1245");
});

module.exports = app;
