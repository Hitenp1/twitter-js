var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
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

