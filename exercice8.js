var http=require('http');
if(process.argv.length==3){
	url=process.argv[2];
	http.get(url,function (response){
		response.setEncoding("utf8");
                response.on("data",function(data){console.log(data);});
		response.on('error',function(e){console.error(e.message);});
	});
}
