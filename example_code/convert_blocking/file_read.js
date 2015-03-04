// Convert the blocking program to a non-blocking one

// var fs = require('fs');

// var contents = fs.readFileSync('index.html');
// console.log(contents);


var fs = require('fs');

fs.readFile('index.html', function(error, contents){
  console.log(contents);
});
