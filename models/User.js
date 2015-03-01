var db = require('./db');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var User = sequelize.define('User', {
  type: Sequelize.ENUM('recipient', 'donor', 'volunteer'),
  name: Sequelize.STRING,
  email_address: Sequelize.STRING,
  username: Sequelize.STRING,
  biography: Sequelize.TEXT,
  total_times_donated: Sequelize.INTEGER
}, {
  freezeTableName: true
});

User.sync();

module.exports = User;
