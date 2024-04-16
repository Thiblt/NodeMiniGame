const sequelize = require('sequelize');

const db = new sequelize({
  dialect: 'sqlite',
  storage: './score.sqlite'
});

db.sync();

module.exports = db;