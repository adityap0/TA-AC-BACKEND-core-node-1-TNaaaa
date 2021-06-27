let fs = require("fs");
let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  if ((req.method === "GET", pathname === "/")) {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.method === "GET" && pathname === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>this is all about NodeJS</h1>");
  } else if (req.method === "POST" && pathname === "/about") {
    res.setHeader("Content-Type", "application/json");
    res.end("{This is a Post request}");
  }
});
server.listen(5000, () => {
  console.log(`listen`);
});
