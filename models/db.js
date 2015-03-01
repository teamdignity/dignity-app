"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";

var config    = require(path.join(__dirname, './dbconfig.json'))[env];
// todo: change config to work with heroku in prod

var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
