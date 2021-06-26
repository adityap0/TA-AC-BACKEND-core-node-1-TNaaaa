// - write code to require only readFile and unlink method from fs module.

console.log(`Welcome to Altcampus`);
const os = require("os");
console.log(os.freemem(), os.cpus().length, os.uptime(), os.version());

let buff1 = Buffer.alloc(12);
buff1.write("Hello World this is ..");
let buff2 = Buffer.allocUnsafe(12);
console.log(buff1.toString());
