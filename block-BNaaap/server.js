// writeCode

// 1. create a server on port 4444 and request from browser on `localhost:4444`
// 2. Add statusCode of 201 and headers to send html content to response
// 3. Do request on server using **different HTTP methods** using **Postman** and write code to check request methods for multiple requests.
let http = require("http");
let server = http.createServer((req, res) => {
  res.statusCode = 201;
  res.end();
});
server.listen(4444, () => {
  console.log(`Hello`);
});
