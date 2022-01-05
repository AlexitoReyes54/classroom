const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('./../../db/dbConnection');

const ClassesInProgress = sequelize.define('Classes_In_Progress', {
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cursing: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    },
  }, {
    // Other model options go here
  });
  
  module.exports = ClassesInProgress;