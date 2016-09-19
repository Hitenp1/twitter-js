var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use(function middle1(req, res,next){
	console.log('/is-anybody-in-there');
	next();
});

app.use('/news', function middle2(req, res, next){
	console.log('/modernism');
	console.log(res.statusCode);
	next();
});

app.get('/', function(req, res, next){
	res.sendStatus(200);
});

app.get('/news', function(req, res, next){
	res.send('Hello World test');
});


app.listen(3000, function(){
	console.log('You have connected')
});