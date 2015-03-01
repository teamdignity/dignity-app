var db = require('./db');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var User = require('./User');

var Goal = sequelize.define('Goal', {
  cost: Sequelize.INTEGER,
  amount_raised: Sequelize.INTEGER,
  goal_picture_url: Sequelize.STRING,
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  priority: Sequelize.INTEGER // Zero highest priority
}, {
  freezeTableName: true
});

Goal.belongsTo(User);

Goal.sync();

module.exports = Goal;
