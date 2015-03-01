var User = require('../models/User');
var Goal = require('../models/Goal');
var braintree = require('braintree');

module.exports = {
  getUser: getUser,
  getUserGoals: getUserGoals,
  getPaymentToken: getPaymentToken,
  makePayment: makePayment
};

var mongoose = require('mongoose');
var mongoUri = (process.env.NODE_ENV === 'production') ?
    process.env.MONGOLAB_URI : 'mongodb://localhost/dignity-app';
mongoose.connect(mongoUri);

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

function getPaymentToken(req, res){
  var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "99xxs69cm47hdfqw",
    publicKey: "cty7h2qc9qbdd8q8",
    privateKey: "3c9a666465176a07ed6df99821d93065"
  });
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
}

function makePayment(req, res){

}
