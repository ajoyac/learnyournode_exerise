var fs = require('fs')
var path = require('path')
if (process.argv.length >=3){
  fs.readdir(process.argv[2], function (e,list){
    if (e) return console.error(e);
    for( var i in list){
      if (process.argv.length ==4){
        original=list[i]
        if(original != path.basename(original,"."+process.argv[3])){
          console.log(list[i]);
        }
      } 
      else console.log(list[i]);
    }
  });
}
