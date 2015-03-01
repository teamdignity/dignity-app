// users
var sampleUserData = require('./sample_users.json');
var User = require('../User');

sampleUserData.forEach(function(user){
  User.create(user);
});
