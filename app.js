// Requirements
var Express = require( 'express' );
var nunjucks = require('nunjucks');
var routes = require('./routes/');

var app = Express(); // creates an instance of an express application

// Setting up Nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });


//Middleware
app.use('/', routes);

app.use(function middle1(req, res,next){
	console.log('/is-anybody-in-there');
	next();
});

app.use('/news', function middle2(req, res, next){
	console.log('/modernism');
	console.log(res.statusCode);
	next();
});

//Routes


// app.get('/', function(req, res, next){
// 	res.sendStatus(200);
// });

// app.get('/index', function(req, res, next){
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

// app.get('/news', function(req, res, next){
// 	res.send('Hello World test');
// });

//Listener
app.listen(3000, function(){
	console.log('You have connected')
});