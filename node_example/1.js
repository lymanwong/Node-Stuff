function printHelp() {
  console.log("hello_world.js (c) Lyman Wong");
  console.log("");
  console.log("usage:");
  console.log("--help     print this help");
  console.log("--file     say hello to {NAME}");
  console.log("");
}

var args = require("minimist")(process.argv.slice(2),{ string: "file" });

if (args.help || !args.name) {
  printHelp();
  process.exit(1);
}


var name = args.name;

console.log("Hello " + name);
//node hello_world World => Hello World


