var express = require("express")
var server = express();
var bodyParser = require("body-parser");

server.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

server.get("/:kodesparepart/:namasparepart/:qty", function(req, res){
    res.setHeader("Content-Type", "text/plain");
    res.send(req.params);
})

var dataSparepart = bodyParser.urlencoded({ extended: false });
server.post("/api/datagudang", dataSparepart, function (req, res) {
  res.send(req.body);
});

server.listen(2500, function () {
    console.log("Server run");
  });