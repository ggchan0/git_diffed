var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var main = require('./routes/main');

app.use('/api', main);

app.listen(3000, function(){
  console.log("Magic happening on port 3000");
});
