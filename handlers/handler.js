var User = require('../models/User');

module.exports = {
  getUser: getUser
};

function getUser(req, res){
  User.find({
    where: {
      username: req.params.username
    }
  }).then(function(user){
    res.send(JSON.stringify(user));
  });
}
