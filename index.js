var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("The server is running...");
});

// Route to home

app.get("/", function(req, res) {
  res.send("hello world");
});
