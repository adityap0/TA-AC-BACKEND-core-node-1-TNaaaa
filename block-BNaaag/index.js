// let fs = require("fs");
// let path = require("path");
// let filepath = path.join(__dirname, "content.md");
// fs.readFile("content.md", (error, file) => {
//   console.log(error, file.toString());
// });

console.log(`Run me 1st`);
for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log(`hey`);
  }, 1000);
}
console.log(`Run me last`);
