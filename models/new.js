// En models/news.js
const Sequelize = require('sequelize');
const { sequelize: db } = require('../db');

const New = db.define('new', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name_n: {
    type: Sequelize.STRING,
    allowNull: false
  },
  route: {
    type: Sequelize.STRING,
    defaultValue: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: false
  },
  link_n: {
    type: Sequelize.STRING,
    defaultValue: false
  },
});

module.exports = New