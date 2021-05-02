var express = require("express")
var server = express();

server.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

server.listen(2000, function () {
    console.log("Server run");
  });