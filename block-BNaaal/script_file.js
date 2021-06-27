// writeCode

// 1. create a basic node server using http module's createServer method and add a listener on port 4000.
// 2. start the server using script writer i.e. `node script_file.js`
// 2. open the browser and request your server on url `http://localhost:4000`.
// 3. notice the output in browser and terminal.

var http = require("http");
http
  .createServer((request, response) => {
    response.end(`Welcome`);
  })
  .listen(4000, `localhost`);

// var server = http.createServer(handleRequest);
// handleRequest = (request, response) => {
//   response.end(`Welcome`);
// };
// server.listen(3000, () => {
//   console.log(`Hello, Server listening on port 3000`);
// });
