const asyncWrapper = require('./../../../shared/middlewares/async')
const Class = require('./../../../shared/models/Class')
const {roleGuard} = require('./../../../shared/middlewares/verifyRole')
const {sequelize} = require('../../../db/dbConnection')

const createClass = roleGuard(async (req, res) => {
    const classSession = await Class.create(req.body.class)
    res.json(classSession)
},2)

const getOneClass = asyncWrapper(async (req, res) => {
    console.log(req.params);
    const classSession = await Class.findOne({where:{id:req.params.classId}})
    delete classSession.dataValues.createdAt
    delete classSession.dataValues.updatedAt
    res.json(classSession)
})

const getOneTeacherClasses = asyncWrapper(async (req, res) => {
    const classSession = await Class.findAll({where:{teacherId:req.params.teacherId}})
    res.json(classSession)
})

const getOneStudentClasses = asyncWrapper(async (req, res) => {
    let query = `SELECT * FROM Classes_In_Progresses INNER JOIN Classes	
    ON Classes_In_Progresses.classId = Classes.id and Classes_In_Progresses.studentId = ${req.params.studentId}`
    const classSession = await sequelize.query(query);
    res.json(classSession[0])
})

const getClassStudents = asyncWrapper(async (req, res) => {
    let query = `SELECT * FROM Classes_In_Progresses INNER JOIN Users		
    ON Classes_In_Progresses.studentId = Users.id and Classes_In_Progresses.classId = ${req.params.classId}`
    const classSessions = await sequelize.query(query);
    classSessions[0].forEach(element => {
        delete element.cursing    
        delete element.createdAt
        delete element.updatedAt
        delete element.password
        delete element.classId
        delete element.roleId
        delete element.id
    });
    res.json(classSessions[0])
})


const getAllClasses = asyncWrapper(async (req, res) => {
    const classSession = await Class.findAll()
    res.json(classSession)
})

const updateClass = roleGuard(async (req, res) => {
    let {id,teacherId,name} = req.body.class
    const classSession = await Class.findOne({ where: { id } });

    if (classSession) {
        await Class.update({name,teacherId},{where:{id}});
    }

    res.status(200).json({
        data:'updated'
    })
},2)

const deleteClass = roleGuard(async (req, res) => {
    const { toDeleteId } = req.body
    const deletedClass = await Class.destroy({where: {id:toDeleteId}});

    if (deletedClass > 0) {
        res.status(200).json({
            data:'deleted'
        })
    }else{
        res.status(404).json({data:'not found'})
    }
},2)



module.exports = {
    createClass,
    getOneClass,
    getAllClasses,
    getOneTeacherClasses,
    updateClass,
    deleteClass,
    getOneStudentClasses,
    getClassStudents
}