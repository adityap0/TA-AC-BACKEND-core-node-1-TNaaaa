// 3. handle POST request on '/about' and send json response `{message: this is a post request}`.

let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  if ((req.method === "GET", pathname === "/")) {
    res.write(`Welcome to homepage`);
    res.end();
  } else if (req.method === "GET" && pathname === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>this is all about NodeJS</h1>");
  } else if (req.method === "POST" && pathname === "/about") {
    res.end(`{message: this is a post request}`);
  }
});
server.listen(5000, () => {
  console.log(`listen`);
});
