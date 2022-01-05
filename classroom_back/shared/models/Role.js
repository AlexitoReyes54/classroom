const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('./../../db/dbConnection');

const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    // Other model options go here
  });

  module.exports = Role;