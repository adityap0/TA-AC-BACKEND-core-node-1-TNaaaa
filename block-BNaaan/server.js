var http = require("http");
let server = http.createServer((req, res) => {
  console.log(req.method, req.url);
});

server.listen(3000, () => {
  console.log(`Server Active on 3000`);
});
