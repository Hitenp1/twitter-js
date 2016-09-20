// Requirements
var Express = require( 'express' );
var nunjucks = require('nunjucks');
var routes = require('./routes/');
var socketio = require('socket.io');

// Creates an instance of an express application
var app = Express();

// Setting up Nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });



//Listener
var server = app.listen(3000);
var io = socketio.listen(server);

// Middleware & Routes
var router = routes(io);
app.use( '/', router );
app.use(Express.static('public'));



