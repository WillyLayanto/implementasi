var express = require("express")
var server = express();

server.get("/:kodesparepart/:namasparepart/:qty", function(req, res){
    res.setHeader("Content-Type", "text/plain");
    res.send(req.params);
})

server.get("/barang", function (req, res) {
  //kode berisi 3 huruf dan 3 angka (ABC001)
  var kode = req.query.kode;
  console.log(`kode sparepart : ${kode}`);
  var nama = req.query.nama;
  console.log(`nama sparepart : ${nama}`);
  res.write(`kode sparepart : ${kode}\n`);
  res.write(`nama sparepart : ${nama}\n`);
  var kodestr = kode.toString();
  var rak = kodestr.substring(0,1);
  var tingkat = kodestr.substring(5,6);
  console.log(`sparepart terdapat pada rak : ${rak}, tingkat : ${tingkat}`);
  res.write(`sparepart terdapat pada rak : ${rak}, tingkat : ${tingkat}`);
  res.send(req.rak);
});

server.listen(2200, function () {
  console.log("Server run");
});