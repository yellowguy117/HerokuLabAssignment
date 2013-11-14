var express = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');

// make static file available in public file
app.use (express.static(__dirname + '/public'));

//app.engine('html', ejs.renderFile);
//tell express to use ejs
app.use (express.bodyParser());

app.get('/', function(req, res){
	res.send('hello world');
});

//http://localhost:3000/hashtag/campchamp/btv
app.get('/hashtag/:hashtag1/:hashtag2',function(req,res){
	var responsemessage = req.params.hashtag1;
	res.send('hello' + responseMessage);
});

app.get('/fib/:index', function9req. res){
	var index = parsInt(req.params.index);
	if(typeof index !== 'number'){
		console.log("typeof index !== 'number'");
	} else{
		console.log("typeof index === 'number'");
	}
	
	var fib = [0,1];
	
	for( i = 0; i <= req.params.index; i++){
		//do stuff
		fib[i+2] = fib [i] + fib[i+1];
	}
	
	//echo it out
	res.send(fib[req.params.index] + '');
});

app.listen(3000);