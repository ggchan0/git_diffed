var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var unirest = require('unirest');
var pretty_json = require('prettyjson');

router.get('/', function(req, res) {
  var count = get_number_of_issues("ggchan0");
  var obj = {"total_issues" : count};
  console.log(obj);
  res.json(obj);
});

function get_number_of_issues(user) {
  var data;
  unirest.get("https://api.github.com/search/issues?q=author:" + user)
  .headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'})
  .end(function(response) {
    console.log(response["raw_body"]);
    var total = JSON.parse(response["raw_body"]).total_count;
    data = total;
  });
  console.log(data);
  return data;
}

function get_number_of_followers(user) {
  unirest.get("https://api.github.com/users/" + user + "/followers")
  .headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'})
  .end(function(response) {
    return response.length;
  });
}

function get_commits_by_user(user) {

}

module.exports = router;
