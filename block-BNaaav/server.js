let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer(handleServer);
server.listen(4000, () => {
  console.log(`listen to 4K`);
});

function handleServer(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathName = parsedUrl.pathname;

  if (req.method === "GET" && pathName === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.method === "GET" && pathName === "/about") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./about.html").pipe(res);
  } else if (req.method === "GET" && pathName === "/blog") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./blog.html").pipe(res);
  } else if (req.method === "GET" && pathName === "/cases") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./cases.html").pipe(res);
  } else if (req.method === "GET" && pathName === "/contact") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./contact.html").pipe(res);
  } else if (req.method === "GET" && pathName.includes(".css")) {
    res.setHeader("Content-Type", "text/css");
    fs.createReadStream(`${__dirname}` + `${pathName}`).pipe(res);
  } else if (req.method === "GET" && pathName.includes(".png")) {
    res.setHeader("Content-Type", "image/png");
    fs.createReadStream(`${__dirname}` + `${pathName}`).pipe(res);
  }
}
