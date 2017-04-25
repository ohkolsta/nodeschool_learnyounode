var fs = require('fs');
var filepath = process.argv[2];

var file1 = fs.readFileSync(filepath);

var total_newlines = file1.toString().split('\n').length - 1;

console.log(total_newlines);
