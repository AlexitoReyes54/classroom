const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('./../../db/dbConnection');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId:{
    type: DataTypes.INTEGER,
    allowNull: false  
  }
}, {
  // Other model options go here
});

module.exports = User;
  

