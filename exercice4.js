var fs = require('fs')
if (process.argv.length ==3){
  fs.readFile(process.argv[2], function (e,buff){
  if (e) return console.error(e);
  console.log((buff.toString().match(/\n/g)||[]).length);
  });
}
