var mongoose = require('mongoose');

module.exports.goalSchema = new mongoose.Schema({
  cost: Number,
  amount_raised: Number,
  goal_picture_url: String,
  name: String,
  description: String,
  priority: Number // Zero highest priority
});
