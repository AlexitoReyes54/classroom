const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_HOST 
  });
  
async function testDbConection() {
  try {
    await sequelize.authenticate();
    return true
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false
  }
}


module.exports = {
  testDbConection,
  sequelize
}