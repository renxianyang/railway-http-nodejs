import { createServer } from 'http';

let a = 1
createServer((req, res) => {
  a++
  
  res.write(`Hello World! ${a}`);
  res.end();
}).listen(process.env.PORT);
