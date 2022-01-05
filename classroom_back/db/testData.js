const { sequelize } = require('./dbConnection');
const User = require('./../shared/models/User');
const Role = require('./../shared/models/Role');
const ClassSession = require('./../shared/models/Class');
const ClassesInProgress = require('./../shared/models/ClassesInProgress');


const populateDatabase = async () =>{
     //await User.create({name:'A pedra',password:'1234',roleId:1})
     //await User.create({name:'Pedro',password:'1234',roleId:2})
     //await User.create({name:'Luis',password:'1234',roleId:3})

     //await Role.create({name:'teacher'})
     //await Role.create({name:'admin'})
     //await Role.create({name:'student'})

     //await ClassSession.create({name:'Math',teacherId:5})

     //await ClassesInProgress.create({studentId:7,classId:1,cursing:true})
}

populateDatabase()
