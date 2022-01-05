const { sequelize } = require('./dbConnection');
const User = require('./../shared/models/User')
const Class = require('./../shared/models/Class')
const ClassesInProgress = require('./../shared/models/ClassesInProgress')
const Role = require('./../shared/models/Role')


function syncDB() {
    sequelize.sync({force:true})
    .then((res) => console.log("Sycncronized"))
    .catch(err => console.log(err))
}

module.exports = syncDB;
