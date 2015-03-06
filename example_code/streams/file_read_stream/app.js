var fs = require('fs');

// Use the fs module to create a Readable stream for fruits.txt.
//Store the new stream in a variable called file.
var file = fs.createReadStream('fruits.txt');

//Next, listen to the readable event on the
//newly created stream and give it a callback.
file.on('readable',function(){
  var chunk;
  while(null !== (chunk = file.read())){
    console.log(chunk.toString());
  }
});
