var express = require('express');
var path = require('path');
var app = express();

var handler = require('./handlers/handler');

app.use(express.static(path.join(__dirname, './public/')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/api/user/:username', handler.getUser);

app.get('/api/user/:username/goals', handler.getUserGoals);

app.get('/api/payment', handler.getPaymentToken);

app.post('/api/payment', handler.makePayment);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('app listening on port', port);
});
