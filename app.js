var express = require('express');
var path = require('path');
var app = express();

// var handler = require('handlers/handler');

app.use(express.static(path.join(__dirname, './public/')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './public/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('app listening on port', port);
});
