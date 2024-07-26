const Sequelize = require('sequelize');
const User = require('./user');
const env = process.env.NODE_ENV || 'team5-db';
const config = require('../config/config')[env];

const db = {};
const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;

User.initiate(sequelize);

User.associate(db);

module.exports = db;