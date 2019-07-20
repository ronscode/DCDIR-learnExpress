var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Let's play a game of Ping Pong");
});

// Ping request, pong resposnse.

app.get("/ping", function(req, res) {
  res.send("Pong");
});
