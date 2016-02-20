var fs = require('fs')
if (process.argv.length ==3){
  var file_info=fs.readFileSync(process.argv[2]);
  console.log((file_info.toString().match(/\n/g)||[]).length);
}
