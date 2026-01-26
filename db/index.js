const { Sequelize } = require("sequelize")

const sequelize = new Sequelize( 
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
      host: process.env.PGDATABASE_URL,
      port: 5432,
      dialect: "postgres"
    }
   
  );

module.exports = {
    sequelize
} 