var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var unirest = require('unirest');
var pretty_json = require('prettyjson');

router.get('/', function(req, res) {
  var promise = new Promise(
    function (resolve, reject) {
      var data = get_number_of_issues("ggchan0");
      setTimeout(function() {
        resolve(data);
      }, 5000);
    }
  );
  promise.then(function(data){
    var obj = {"total_issues" : data};
    console.log(obj);
    res.json(obj);
  })
  .catch(function(reason){
    console.log("ERROR");
    console.log(reason);
  });
});

router.get('/number_of_issues', function(req, res) {
  unirest.get("https://api.github.com/search/issues?q=author:" + "ggchan0")
  .headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'})
  .end(function(response) {
    var total = response.body.total_count;
    var obj = {"total_issues" : total};
    res.json(obj);
  });
});

router.get('/number_of_followers', function(req, res){
  unirest.get("https://api.github.com/users/" + "ggchan0" + "/followers")
  .headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'})
  .end(function(response) {
    var total = response.body.length;
    console.log(total);
    var obj = {"total_followers" : total};
    res.json(obj);
  });
});

router.get('/commit_messages', function(req, res) {
  //user = req.params.username;
  user = "ggchan0";
  unirest.get("https://api.github.com/users/" + user + "/events")
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .end(function(response) {
    var data = response.body;
    var push_data = [];
    var commit_count = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].type != "PushEvent") {
        continue;
      }
      var obj = {};
      obj.action = "push";
      obj.created_time = data[i].created_at;
      obj.commit_data = [];
      var payload = data[i].payload;
      commit_count += payload.commits.length;
      for (var j = 0; j < payload.commits.length; j++) {
        var commit = {};
        commit.sha = payload.commits[j].sha;
        commit.message = payload.commits[j].message;
        commit.url = payload.commits[j].url;
        obj.commit_data.push(commit);
      }
      push_data.push(obj);
    }
    returned_obj = {"commit_count" : commit_count, "data" : push_data};
    res.json(returned_obj);
  });
});

router.get('/users/:username', function(req, res){
  unirest.get("https://api.github.com/users/" + req.params.username)
  .headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'})
  .end(function(response) {
    res.json(response.body);
  });
});


router.get('/users/:username/:repo/commits', function(req, res){
  unirest.get("https://api.github.com/repos/" + req.params.username + "/" + req.params.repo + "/commits")
  .headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'})
  .end(function(response) {
    var data = response.body;
    var push_data = [];
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].author.login);
      if (data[i].author.login != req.params.username) {
        continue;
      }
      var obj = {};
      obj.sha = data[i].sha;
      obj.commit_date = data[i].commit.author.date;
      obj.message = data[i].message;
      obj.url = data[i].url;
      push_data.push(obj);
    }
    returned_obj = {"user" : req.params.username, "repo" : req.params.repo, "data" : push_data};
    res.json(returned_obj);
  });
});

module.exports = router;
