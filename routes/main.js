var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var unirest = require('unirest');
var pretty_json = require('prettyjson');

router.get('/', function(req, res) {
  data = unirest.get("https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc")
  .headers({'User-Agent' : 'ggchan0'})
  .end(function(response) {
    res.json(response);
  });
});

module.exports = router;
