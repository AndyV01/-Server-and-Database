const Sequelize = require('sequelize');
const { sequelize: db } = require('../db');

const Product = db.define('product', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name_p: {
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
  price: {
    type: Sequelize.INTEGER,
    
  },
  link_p: {
    type: Sequelize.STRING,
    defaultValue: false
  },
});

module.exports = Product