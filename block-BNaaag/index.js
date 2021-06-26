// let { readFile, readFileSync } = require("fs");
// let path = require("path");
// let filepath = path.join(__dirname, "content.md");
// readFile("content.md", "utf8", (error, file) => {
//   console.log(file);
// });

// var final = readFileSync("content.md", "utf8");
// console.log(final);

// var buff1 = Buffer.alloc(10);
// buff1.write(`Welcome to Buffer`);
// console.log(buff1);

let urlString = `https://www.instagram.com`;
let url = require("url");

var parsedUrl = url.parse(urlString, true);
console.log(parsedUrl);
