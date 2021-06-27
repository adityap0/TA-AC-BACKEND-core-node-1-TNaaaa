// let fs = require("fs");
// let http = require("http");
// let url = require("url");

// let server = http.createServer((req, res) => {
//   var parsedUrl = url.parse(req.url);
//   var pathname = parsedUrl.pathname;
//   if ((req.method === "GET", pathname === "/")) {
//     res.setHeader("Content-Type", "text/html");
//     fs.createReadStream("./index.html").pipe(res);
//   } else if (req.method === "GET" && pathname === "/about") {
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1>this is all about NodeJS</h1>");
//   } else if (req.method === "POST" && pathname === "/about") {
//     res.setHeader("Content-Type", "application/json");
//     res.end("{This is a Post request}");
//   }
// });
// server.listen(5000, () => {
//   console.log(`listen`);
// });

// writeCode

// Create a http server and use readFile and createReadStream to read a file and send the data into response.
// - add a listener on port 5555
// - create a file node.html
// - handle GET request on '/file' route to read node.html using fs.readFile
// - handle GET request on '/stream' route to read node.html using fs.createReadStream

let http = require("http");
let fs = require("fs");
let url = require("url");

//Method 1
// let server = http.createServer((req, res) => {
//   var parsedUrl = url.parse(req.url);
//   let pathname = parsedUrl.pathname;
//   if (req.method === "GET" && pathname === "/file") {
//     res.setHeader("Content-Type", "plain/html");
//     fs.readFile("./node.html", (err, content) => {
//       console.log(content.toString());
//       res.end(content);
//     });
//   }
// });
//Method 2
let server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  if (req.method === "GET" && pathname === "/file") {
    res.setHeader("Content-Type", "plain/html");
    fs.createReadStream("./node.html").pipe(res);
  }
});
server.listen(5555, () => {
  console.log(`Listen on port 5555`);
});
