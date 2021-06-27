let http = require("http");
// let server = http.createServer((req, res) => {
//   console.log(req, res);
//   res.end(`Response End`);
// });
// server.listen(5000);

// let server = http.createServer((req, res) => {
//   res.end(`My first server in NodeJS`);
// });
// server.listen(5100, () => {
//   console.log(`Listening to 5100`);
// });

// let server3 = http.createServer((req, res) => {
//   console.log(req.headers);
//   console.log(req.headers["user-agent"]);
//   res.end();
// });
// server3.listen(5555, () => {
//   console.log(`Listening to 5555`);
// });
// let server4 = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);
//   res.setHeader("Content-Type", "text");
//   res.end(`${req.url}, ${req.method}`);
// });
// server4.listen(5566, () => {
//   console.log(`Listening to 5566`);
// });
// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.
// let server5 = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text");
//   res.end(`${req.headers}`);
// });
// server5.listen(7000, () => {
//   console.log(`Listening to 7000`);
// });
// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.
// let server6 = http.createServer((req, res) => {
//   res.statusCode = 202;
// });
// server6.listen(3333, () => {
//   console.log(`Listening to 3333`);
// });
// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)
// let server7 = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.end(`<h3>Welcome to altcampus</h3>`);
// });
// server7.listen(8000, () => {
//   console.log(`Listening to 8000`);
// });
// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.
// let server7 = http.createServer((req, res) => {
//   res.writeHead(201, "Content-Type", "text/plains");
// });
// server7.listen(8000, () => {
//   console.log(`Listening to 8000`);
// });
// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})
// let server8 = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "json");
//   res.end(`{success: true, message: 'Welcome to Nodejs'}`);
// });
// server8.listen(8888, () => {
//   console.log(`Listening to 8888`);
// });
// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`
// let server9 = http.createServer((req, res) => {
//   console.log(req.method);
//   res.setHeader("Content-Type", "html");
//   res.end(`<h2>posted for first time</h2>`);
// });
// server9.listen(5050, () => {
//   console.log(`Listening to 5050`);
// });
// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.
let url = require("url");
// let server10 = http.createServer((req, res) => {
//   let parsedUrl = url.parse(req.url);
//   let pathname = parsedUrl.pathname;
//   if (req.method === "GET" && pathname === "/") {
//     res.end(`Aditya Pathak`);
//   } else if (req.method === "GET" && pathname === "/about") {
//     res.setHeader("Content-Type", "text/html");
//     res.end(`<h2>Aditya Pathak</h2>`);
//   } else {
//     console.error(`404`);
//   }
// });
// server10.listen(2345, () => {
//   console.log(`Listening to 2345`);
// });
// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.
let server11 = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  if (req.method === "GET" && pathname === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<form>
    <input type = "name", placeholder = "Enter your Name">
    <input type = "email", placeholder = "Enter your Email">
    </form>`);
    res.end();
  } else if (req.method === "POST" && pathname === "/users") {
    res.end(`Posted for the second time`);
  } else {
    console.error(`404`);
  }
});
server11.listen(2345, () => {
  console.log(`Listening to 2345`);
});
// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser
//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query
let server12 = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  console.log(req);
  console.log(pathname, req.url);
  res.setHeader("Content-Type", "json");
  res.end();
});
server12.listen(2344, () => {
  console.log(`Listening to 2344`);
});
