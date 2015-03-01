var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dignity-app');

var sampleUserData = require('./sample_users.json');
var User = require('../User');
sampleUserData[0].goals = require('./sample_goals.json');

var db = mongoose.connection;
db.on('error', function(){
  console.error('error connecting to mongo');
});
db.once('open', function(){
  console.log('opened connection to db successfully');
  var user = new User(sampleUserData[0]);
  user.save();
});
console.log('synchronous stuff finished');
