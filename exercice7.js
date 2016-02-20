var mymodule = require('./mymodule.js')
var argv = process.argv;
if (argv.length ==4){
  mymodule(argv[2],argv[3], function(e,list){
    if (e) console.error(e);
    list.forEach(function(i){
      console.log(i);
    });
  });
}
