var http = require("http");
var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write("Hello");
  res.end(`<h1>Welcome</h1>`);
});
server.listen(3000, () => {
  console.log(`Active Server`);
});
