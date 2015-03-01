var User = require('../models/User');
var Goal = require('../models/Goal');

module.exports = {
  getUser: getUser,
  getUserGoals: getUserGoals
};

function getUser(req, res){
  User.find({
    where: {
      username: req.params.username
    }
  }).then(function(user){
    res.send(JSON.stringify(user));
  });
};

function getUserGoals(req, res){
  User.find({
    where: {
      username: req.params.username
    }
  }).then(function(user){
    var id = user.getDataValue('id');
    Goal.find({
      where: {
        UserId: id
      }
    }).then(function (goals) {
      res.send(JSON.stringify(goals));
    });
  });
};
