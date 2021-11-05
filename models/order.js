const Sequelize = require('sequelize')
const { sequelize: db } = require('../db')
const User = require ('./user')
const Product = require ('./product')

const Order = db.define('order', {
    id:{
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_id :{
        type: Sequelize.BIGINT,
        references: {
         model: User,
         Key: 'id'
    }
    },
    product_id :{
        type: Sequelize.BIGINT,
        references: {
            model: Product,
            Key: 'id'
        }
    },
    adress :{
        type: Sequelize.STRING,
        defaultValue: false
    }
})
Order.belongsTo( User, { foreignKey: 'user_id' })
Order.belongsTo( Product, { foreignKey: 'product_id' })

module.exports = Order
