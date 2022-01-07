const User = require('./../../../shared/models/User')
const asyncWrapper = require('./../../../shared/middlewares/async')
const { roleGuard } = require('../../../shared/middlewares/verifyRole');
const { sendProperResponse } = require('../../../shared/helpers/handleData')
const {sequelize} = require('../../../db/dbConnection')

const getAllTeachers = asyncWrapper(async (req, res) => {
    const teachers = await User.findAll({ attributes: [['id','teacherId'], 'name'],where: { roleId:1,roleId:2  } })
    sendProperResponse(res,teachers)
})

const getAllStudents = asyncWrapper(async (req, res) => {
    const students = await User.findAll({ attributes: [['id','studentId'], 'name'],where: { roleId:3 } })
    sendProperResponse(res,students)
})

const getNotInClassStudents = asyncWrapper(async (req, res) => {
   let query = `SELECT name,id as studentId 
   FROM Users
  WHERE NOT EXISTS (SELECT NULL FROM Classes_In_Progresses WHERE Users.id = 
    Classes_In_Progresses.studentId and Classes_In_Progresses.classId 
    = ${req.params.classId}) and Users.roleId = 3 `

   const students = await sequelize.query(query);
    sendProperResponse(res,students[0])
})

const getOneStudent = asyncWrapper(async (req, res) => {
    const student = await User.findOne({ where: { roleId:3,id:req.params.id } })
    sendProperResponse(res,student)
})

const getOneTeacher = asyncWrapper(async (req, res) => {
    const teacher = await User.findOne({ where: { roleId:3,id:req.params.id } })
    sendProperResponse(res,teacher)
})

const updateUser = roleGuard(async (req, res) => {
    const {name,password,id} = req.body.updatedUser
    const teacher = await User.findOne({ where: { id } });

    if (teacher) {
        await User.update({name,password},{where:{id}});
    }

    res.status(200).json({
        data:'updated'
    })
},2)

const deleteUser = roleGuard(async (req, res) => {
    const { toDeleteId } = req.body
    const deletedUser = await User.destroy({where: {id:toDeleteId}});

    if (deletedUser > 0) {
        res.status(200).json({
            data:'deleted'
        })
    }else{
        res.status(404).json({data:'not found'})
    }

},2);

module.exports = {
    getAllTeachers,
    getAllStudents,
    getOneStudent,
    getOneTeacher,
    updateUser,
    deleteUser,
    getNotInClassStudents
}