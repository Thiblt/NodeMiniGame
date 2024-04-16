const sequelize = require('sequelize');
const db = require('../config/database');

const Score = db.define('score', 
{
    id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    win: { type: sequelize.INTEGER},
    loose: { type: sequelize.INTEGER  },
    tie: { type: sequelize.INTEGER  },
});

module.exports = Score;