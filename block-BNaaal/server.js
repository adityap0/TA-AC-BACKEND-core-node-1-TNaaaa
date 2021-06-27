var http = require("http");
var server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.end(`Welcome `);
});

server.listen(3000, () => {
  console.log(`Server active @ 3000`);
});
