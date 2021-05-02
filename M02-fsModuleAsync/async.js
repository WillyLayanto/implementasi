const fs = require("fs");

fs.rename("tes.txt", "cuaca.txt", (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Berhasil mengganti nama!");
});
