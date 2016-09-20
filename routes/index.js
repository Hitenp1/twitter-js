// Requirements
var express = require('express');
var bodyParser = require('body-parser');
var tweetBank = require('../tweetBank');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// routes module exports a function which takes io and returns router
module.exports = function (io) {

  // create a router
  var router = express.Router();

  router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.post('/tweets', urlencodedParser, function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    // Emitter that sends a named event along with some data
    io.sockets.emit('newTweet', { name: name, text: text });

    res.redirect('/');
  });

  router.get('/users/:username', function(req, res) {
    var user = req.params.username;
    var list = tweetBank.find( {name: user} );
    res.render( 'index', { tweets: list, showForm: true, username: user} );
  });
  return router;
};



