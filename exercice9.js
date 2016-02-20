var http=require('http');
var bl=require('bl');
if(process.argv.length==3){
	url=process.argv[2];
	http.get(url,function (response){
		response.pipe(bl(function(err,data){
			if(err) console.error(err);
                        console.log(data.length);
			console.log(data.toString());
	}));
	});
}
