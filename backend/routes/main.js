var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var unirest = require('unirest');
var config = require ('.././config/auth');

router.get('/', function(req, res) {
  //var user = req.params.username;
  var user = "ggchan0";
  res.redirect('api/users/' + user);
});

router.get('/users/:username', function(req, res){
  //var user = req.params.username;
  var user = "ggchan0";
  unirest.get("https://api.github.com/users/" + user)
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    res.json(response.body);
  });
});


router.get('/issues', function(req, res) {
  //var user = req.params.username
  var user = "leggechr";
  unirest.get("https://api.github.com/search/issues?q=type:issue+author:" + user)
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    var data = response.body;
    var returned_obj = {};
    returned_obj.total = data.items.length;
    returned_obj.data = data.items;
    res.json(returned_obj);
  });
});

router.get('/followers', function(req, res){
  //var user = req.params.username
  var user = "ggchan0";
  unirest.get("https://api.github.com/users/" + user + "/followers")
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    var data = response.body;
    var returned_obj;
    returned_obj.total = data.length;
    returned_obj.data = data;
    res.json(returned_obj);
  });
});

router.get('/following', function(req, res) {
  //var user = req.params.username
  var user = "ggchan0";
  unirest.get("https://api.github.com/users/" + user + "/following")
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    var data = response.body;
    var returned_obj = {};
    returned_obj.total = data.length;
    returned_obj.data = data;
    res.json(returned_obj);
  });
});

router.get('/repos', function(req, res) {
  //var user = req.params.username;
  var user = "ggchan0";
  unirest.get("https://api.github.com/users/" + user + "/repos")
  .headers({'User-Agent' : "ggchan0", 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    data = response.body;
    var returned_obj = {};
    returned_obj.total = data.length;
    returned_obj.data = data;
    res.json(returned_obj);
  });
});

router.get('/recent_pushes_old', function(req, res) {
  //var user = req.params.username;
  var user = "ggchan0";
  unirest.get("https://api.github.com/users/" + user + "/events")
  .headers({'User-Agent' : "ggchan0", 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    var data = response.body;
    var push_data = [];
    var commit_count = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].type != "PushEvent") {
        continue;
      }
      commit_count += data[i].payload.commits.length;
      push_data.push(data[i]);
    }
    returned_obj = {"commit_total" : commit_count, "push_total" : push_data.length, "data" : push_data, };
    res.json(returned_obj);
  });
});

function get_events_by_page(page, user) {
  unirest.get("https://api.github.com/users/" + user + "/events?page=" + page)
  .headers({'User-Agent' : "ggchan0", 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    var data = response.body;
    var returned_obj = {};
    var push_data = [];
    returned_obj.commit_count = 0;
    returned_obj.push_count = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].type !== "PushEvent") {
        continue;
      }
      returned_obj.commit_count += data[i].payload.commits.length;
      push_data.push(data[i]);
    }
    returned_obj.push_count += push_data.length;
    returned_obj.data = push_data;
    return returned_obj;
  });
}

router.get('/recent_pushes_new', function(req, res) {
  //var user = req.params.username;
  var user = "ggchan0";

  returned_obj = {};
  returned_obj.commit_count = 0;
  returned_obj.push_count = 0;
  returned_obj.data = [];
  function get_json_data(page) {
    return new Promise(function (resolve, reject) {
      unirest.get("https://api.github.com/users/" + user + "/events?page=" + page)
      .headers({'User-Agent' : "ggchan0", 'Content-Type' : 'application/json'})
      .auth({"user" : config.user, "pass" : config.pass})
      .end(function(response) {
        var data = response.body;
        var returned_obj = {};
        var push_data = [];
        returned_obj.commit_count = 0;
        returned_obj.push_count = 0;
        for (var i = 0; i < data.length; i++) {
          if (data[i].type !== "PushEvent") {
            continue;
          }
          returned_obj.commit_count += data[i].payload.commits.length;
          push_data.push(data[i]);
        }
        returned_obj.push_count += push_data.length;
        returned_obj.data = push_data;
        resolve(returned_obj);
      });

    });
  }

  for (var i = 1; i <= 5; i++) {
    var p = get_json_data(i);
    p.then(function(obj) {
      returned_obj.commit_count += obj.commit_count;
      returned_obj.push_count += obj.push_count;
      returned_obj.data = returned_obj.data.concat(obj.data);
    });
  }
  setTimeout(function(){
    res.json(returned_obj);
  }, 2000);
  //res.json(returned_obj);

});

router.get('/contribution_to_repo', function(req, res) {
  //var user = req.params.username;
  //var repo = req.params.repo;
  var user = "ggchan0";
  var repo = "git_diffed";
  unirest.get("https://api.github.com/repos/" + user + "/" + repo + "/stats/contributors")
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response){
    data = response.body;
    returned_obj = {};
    returned_obj.user = user;
    returned_obj.repo = repo;
    for (var i = 0; i < data.length; i++) {
      contributor = data[i];
      if (contributor.author.login === user) {
        returned_obj.commit_count = contributor.total;
        returned_obj.additions = 0;
        returned_obj.deletions = 0;
        for (var j = 0; j < contributor.weeks.length; j++) {
          returned_obj.additions += contributor.weeks[j].a;
          returned_obj.deletions += contributor.weeks[j].d;
        }
      }
    }
    res.json(returned_obj);
  });

});

router.get('/pull_requests', function(req, res) {
  //var user = req.params.username;
  var user = "leggechr";
  unirest.get("https://api.github.com/search/issues?q=type:pr+author:" + user)
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({'user' : config.user, 'pass' : config.pass})
  .end(function(response) {
    data = response.body;
    returned_obj = {};
    returned_obj.total = data.total_count;
    returned_obj.data = data.items;
    res.json(returned_obj);
  });
});

router.get('/changes_by_week', function(req, res) {
  //var user = req.params.username
  //var repo = req.params.repo
  var user = "ggchan0";
  var repo = "git_diffed";
  unirest.get("https://api.github.com/repos/" + user + "/" + repo + "/stats/code_frequency")
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    data = response.body;
    returned_obj = [];
    for (var i = 0; i < data.length; i++) {
      var stats_per_week = {};
      stats_per_week.week = i;
      stats_per_week.additions = data[i][1];
      stats_per_week.deletions = data[i][2] * -1;
      console.log(stats_per_week);
      returned_obj.push(stats_per_week);
    }
    res.json(returned_obj);
  });
});


router.get('/commits_in_repo', function(req, res){
  //var user = req.params.username
  //var repo = req.params.repo
  var user = "ggchan0";
  var repo = "git_diffed";
  unirest.get("https://api.github.com/repos/" + user + "/" + repo + "/commits")
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response) {
    var data = response.body;
    var returned_obj = {};
    returned_obj.total = data.length;
    returned_obj.data = data;
    res.json(returned_obj);
  });
});

/*
router.get('/commits_by_repo', function(req, res) {
  //user = req.params.username;
  user = "ggchan0";
  unirest.get('https://api.github.com/users/' + user + '/repos')
  .headers({'User-Agent' : user, 'Content-Type' : 'application/json'})
  .auth({"user" : config.user, "pass" : config.pass})
  .end(function(response){
    var repo_response_data = response.body;
    var all_repo_data = [];
    for (var i = 0; i < repo_response_data.length; i++) {
      var repo_data = {};
      repo_data.id = repo_response_data[i].id;
      repo_data.name = repo_response_data[i].name;
      repo_data.url = repo_response_data[i].url;
      repo_data.created_time = repo_response_data[i].created_at;
      all_repo_data.push(repo_data);
    }
    var all_repo_commit_history = [];

    var repo_history = function(user, repo) {
      var repo_history_promise = new Promise(function(resolve, reject){
          var returned_obj = get_commits_by_repo(user, repo);
          resolve(returned_obj);
      }).catch(function(){
        console.log("Retrying...");
      });
      return repo_history_promise;
    };

    for (var j = 0; j < all_repo_data.length; j++) {
      repo_history(user, all_repo_data[j].name).then(function(val) {
        var temp_obj = {};
        temp_obj.repo_data = all_repo_data[j];
        temp_obj.commit_data = val;
        all_repo_commit_history.push(temp_obj);
      });
    }

    for (var j = 0; j < all_repo_data.length; j++) {
      support.get_commits_by_repo(user, all_repo_data[j].name).then(function (val) {
        var temp_obj = {};
        temp_obj.repo_info = all_repo_data[j];
        temp_obj.data = val;
        all_repo_commit_history.push(temp_obj);
      }).catch(function (e){
        console.log("error");
      });
    }
    res.json(all_repo_commit_history);
  });
}); */

module.exports = router;
