var http=require('http');
var bl=require('bl');
var collect={};
var urls=process.argv.slice(2);
for(i=0;i<urls.length;i++){
	httpget(i,urls[i]);
}
function httpget(i,url){
	http.get(url,function (response){
		response.pipe(bl(function(err,data){
			if(err) console.error(err);
			collect[i]=data.toString();
                        if (Object.keys(collect).length == urls.length)
				printcollected();
	}));
	});
}
function printcollected(){
	for(i=0;i<urls.length;i++){
        	console.log(collect[i]);
	}
}
