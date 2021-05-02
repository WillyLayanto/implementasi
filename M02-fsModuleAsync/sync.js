const fs = require("fs");

fs.open("tes1.txt", "w+", function (err, file) {
  if (err) throw err;

  let data = "Testing";

  try{
    fs.writeSync(file, data, 0, data.length, 0);
    console.log("Berhasil!");
  } catch{
    console.error(err);
  }
});

