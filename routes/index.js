var express = require('express');
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});


router.post('/tweets',urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)
  var name = req.body.name;
  var text = req.body.text;
  console.log(name, text);
  tweetBank.add(name, text);
  res.redirect('/');
});


router.get('/users/:username', function(req, res) {
  var user = req.params.username;
  var list = tweetBank.find( {name: user} );
  res.render( 'index', { tweets: list } );
});




// router.get('/stylesheets/style.css', function (req, res) {
// 	res.sendFile(__dirname.slice(0,-6) + '/public/stylesheets/style.css');
// });

module.exports = router;

