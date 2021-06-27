let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  if ((req.method === "GET", pathname === "/")) {
    res.write(`Welcome to the index Page`);
    res.end();
  } else if (req.method === "GET" && pathname === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>About Page</h1>");
  } else if (req.method === "GET" && pathname === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>User Info</h1>");
  } else if (req.method === "POST" && pathname === "/users") {
    res.end(`Posted for the first time`);
  }
});
server.listen(3000, () => {
  console.log(`listen`);
});
