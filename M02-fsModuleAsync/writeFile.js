const fs = require("fs");

fs.writeFile("tes.txt", "Hari ini hari yang cerah", function (err) {
  if (err) throw err;
  console.log("Berhasil disimpan!");
});
