var fs = require('fs');

// readFileSync
console.log("A-sync");
var result = fs.readFileSync('syntax_js/sample.txt', 'utf-8');
console.log(result + "-sync");
console.log("C-sync");

// readFile with out sync = asynchronous
console.log("A");
fs.readFile('syntax_js/sample.txt', 'utf8', function(err, result) {
  console.log(result);
});
console.log("C");