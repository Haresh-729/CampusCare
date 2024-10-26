const Sequelize = require('sequelize');
const config = require('../config/config.js');
const dbConfig = config.development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models (e.g., userModel)
db.User = require('./userModel')(sequelize, Sequelize);

module.exports = db;
