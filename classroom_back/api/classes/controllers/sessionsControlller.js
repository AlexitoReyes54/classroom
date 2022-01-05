const asyncWrapper = require('./../../../shared/middlewares/async')
const ClassesInProgress = require('./../../../shared/models/ClassesInProgress')
const {adminGuard} = require('./../../../shared/middlewares/verifyRole')

/*
    - VALIDATE TEACHER ROLE
    
    - CHANGE VARIABLE NAMES: 
        **classSession
        **req.body.class
        **deletedClass
*/

const addStudentToClass = asyncWrapper(async (req, res) => {
    const classSession = await ClassesInProgress.create(req.body.checkInclass)
    res.json({classSession})
})

const getStudentsFromClass = asyncWrapper(async (req, res) => {
    console.log(req.params.classId);
    const classSession = await ClassesInProgress.findAll({where:{classId:req.params.classId}})
    res.json({classSession})
})

const getSessionsFromOneStudents = asyncWrapper(async (req, res) => {
    const classSession = await ClassesInProgress.findAll({where:{studentId:req.params.studentId}})
    res.json({classSession})
})

const updateStudentSessions = asyncWrapper(async (req, res) => {
    let {id, toDeleteId,cursing} = req.body.checkInclass
    const classSession = await ClassesInProgress.findOne({ where: { id } });

    if (classSession) {
        await ClassesInProgress.update({toDeleteId,cursing},{where:{id}});
    }

    res.status(200).json({
        data:'updated'
    })
})

const deleteStudentSessions = asyncWrapper(async (req, res) => {
    const { toDeleteId } = req.body
    const deletedClass = await ClassesInProgress.destroy({where: {id:toDeleteId}});

    if (deletedClass > 0) {
        res.status(200).json({
            data:'deleted'
        })
    }else{
        res.status(404).json({data:'not found'})
    }
})




module.exports = {
    addStudentToClass,
    getStudentsFromClass,
    getSessionsFromOneStudents,
    updateStudentSessions,
    deleteStudentSessions
}