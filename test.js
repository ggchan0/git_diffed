var unirest = require('unirest');
data = unirest.get("https://api.github.com/users/ggchan0/followers").headers({'User-Agent' : 'ggchan0', 'Content-Type' : 'application/json'}).end(function(response){console.log(response.length)});
console.log(data);
