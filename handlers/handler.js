var User = require('../models/User');
var Goal = require('../models/Goal');

module.exports = {
  getUser: getUser,
  getUserGoals: getUserGoals
};

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dignity-app');

var db = mongoose.connection;
db.on('error', function(){
  console.error('error connecting to mongo');
});
db.once('open', function(){
  console.log('opened connection to db successfully');
});

function getUser(req, res){
  User.findOne({
    username: req.params.username
  }, function(err, user){
    res.send(JSON.stringify(user));
  });
};

function getUserGoals(req, res){
  User.findOne({
    username: req.params.username
  }, function(err, user){
    res.send(JSON.stringify(user.goals));
  });
};
