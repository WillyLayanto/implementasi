const http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome</h1>");
    res.write("<p>Done.</p>")
    res.end();
  })
  .listen(3400);