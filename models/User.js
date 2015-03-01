var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  type: String,
  name: String,
  email_address: String,
  username: {
    type: String,
    unique: true
  },
  profile_picture_url: String,
  biography: String,
  total_times_donated: Number,
  goals: [require('./Goal').goalSchema]
});
var User = mongoose.model('User', userSchema);

module.exports = User;
