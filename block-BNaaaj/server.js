var http = require("http");
http
  .createServer((request, response) => {
    console.log(request, response);
    response.end(`Welcome`);
  })
  .listen(3000, `localhost`);

var server = http.createServer(handleRequest);
handleRequest = (request, response) => {
  response.end(`Welcome`);
};
server.listen(3000, () => {
  console.log(`Hello, Server listening on port 3000`);
});
