var fs = require('fs')
var path = require('path')

module.exports = function (dirpath,ext,callback){
  fs.readdir(dirpath, function (e,list){
    if (e) return callback(e);
    var data=[];
    for( var i in list){
      if(list[i] != path.basename(list[i],"."+ext)){
          data.push(list[i]);
      }
    }
    callback(null,data)
  });
}
