var fs = require('fs');

WioLTE.init;

var test = function() {
  // List files
  console.log('List files on root path:\r\n', fs.readdirSync());
  // Write file  
  fs.writeFileSync("hello.txt", "Hello World");
  // read file
  console.log(fs.readFileSync("hello.txt"));
  // append file
  fs.appendFileSync("hello.txt", "!!!");
  // read again
  console.log(fs.readFileSync("hello.txt"));
};

setTimeout(test, 4000);







