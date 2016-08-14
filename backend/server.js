var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
var main = require('./routes/main');

app.use('/', main);

app.listen(3000, function(){
  console.log("Magic happening on port 3000");
});
