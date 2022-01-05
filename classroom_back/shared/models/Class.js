const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('./../../db/dbConnection');

const Class = sequelize.define('Class', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {
    // Other model options go here
  });

module.exports = Class;