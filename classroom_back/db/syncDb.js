const { sequelize } = require('./dbConnection');
const User = require('./../shared/models/User')
const Class = require('./../shared/models/Class')
const ClassesInProgress = require('./../shared/models/ClassesInProgress')
const Role = require('./../shared/models/Role')


function syncDB() {

    //User.hasMany(ClassesInProgress,{foreignKey:'userId'})
    //Class.hasMany(ClassesInProgress,{foreignKey:'classId'})

    sequelize.sync({force:true})
    .then((res) => console.log("Sycncronized"))
    .catch(err => console.log(err))
}

module.exports = syncDB;
