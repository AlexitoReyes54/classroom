const User = require('./../../../shared/models/User')
const asyncWrapper = require('./../../../shared/middlewares/async')
const { adminGuard } = require('../../../shared/middlewares/verifyRole');
const { sendProperResponse } = require('../../../shared/helpers/handleData')

const getAllTeachers = asyncWrapper(async (req, res) => {
    const teachers = await User.findAll({ where: { roleId:1 } })
    sendProperResponse(res,teachers)
})

const getAllStudents = asyncWrapper(async (req, res) => {
    const students = await User.findAll({ where: { roleId:3 } })
    sendProperResponse(res,students)
})

const getOneStudent = asyncWrapper(async (req, res) => {
    const student = await User.findOne({ where: { roleId:3,id:req.params.id } })
    sendProperResponse(res,student)
})

const getOneTeacher = asyncWrapper(async (req, res) => {
    const teacher = await User.findOne({ where: { roleId:3,id:req.params.id } })
    sendProperResponse(res,teacher)
})

const updateUser = adminGuard(async (req, res) => {
    const {name,password,id} = req.body.updatedUser
    const teacher = await User.findOne({ where: { id } });

    if (teacher) {
        await User.update({name,password},{where:{id}});
    }

    res.status(200).json({
        data:'updated'
    })
})

const deleteUser = adminGuard(async (req, res) => {
    const { toDeleteId } = req.body
    const deletedUser = await User.destroy({where: {id:toDeleteId}});

    if (deletedUser > 0) {
        res.status(200).json({
            data:'deleted'
        })
    }else{
        res.status(404).json({data:'not found'})
    }

});

module.exports = {
    getAllTeachers,
    getAllStudents,
    getOneStudent,
    getOneTeacher,
    updateUser,
    deleteUser
}