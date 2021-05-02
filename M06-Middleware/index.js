var express = require("express")
var server = express();

var logger = require("morgan");
server.use(logger("dev"));

const verif = (req, res, next) => {
    if (req.params.kodesparepart === "ABC001") {
      console.log("Barang Terverifikasi");
      next();
    } else {
      const err = {
        status: "sparepart tidak tersedia",
        data: {
          kode: req.params.kodesparepart,
        },
      };
      next(err);
    }
  };

  server.get("/:kodesparepart/:namasparepart/:qty", verif, function(req, res){
    res.setHeader("Content-Type", "text/plain");
    res.send(req.params);
})

server.use((error, req, res, next) => {
    res.send(error);
  });

  server.listen(2300, function () {
    console.log("Server run");
  });