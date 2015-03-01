// Users
var sampleUserData = require('./sample_users.json');
var User = require('../User');
// Goals
var sampleGoalData = require('./sample_goals.json');
var Goal = require('../Goal');

var goals = [];
Goal.create(sampleGoalData[0]).then(function (g) {
  User.create(sampleUserData[0]).then(function (u) {
    g.setUser(u);
  });
});
