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
    var total = JSON.parse(response.raw_body).total_count;
    var obj = {"total_issues" : total};
    res.json(obj);
  });
});

router.get('/number_of_followers', function(req, res){
  unirest.get("https://api.github.com/users/" + "ggchan0" + "/followers")
  .headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'})
  .end(function(response) {
    var total = JSON.parse(response.raw_body).length;
    console.log(total);
    var obj = {"total_followers" : total};
    res.json(obj);
  });
});

function get_commits_by_user(user) {

}

module.exports = router;
