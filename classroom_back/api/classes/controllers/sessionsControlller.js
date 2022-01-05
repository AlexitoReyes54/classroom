const asyncWrapper = require('./../../../shared/middlewares/async')
const ClassesInProgress = require('./../../../shared/models/ClassesInProgress')
const {roleGuard} = require('./../../../shared/middlewares/verifyRole')

/*
    - VALIDATE TEACHER ROLE
    
    - CHANGE VARIABLE NAMES: 
        **classSession
*/

const addStudentToClass = roleGuard(async (req, res) => {
    const checkInclass = await ClassesInProgress.create(req.body.checkInclass)
    res.json({ data:checkInclass})
},1)

const getStudentsFromClass = asyncWrapper(async (req, res) => {
    console.log(req.params.classId);
    const checkInclass = await ClassesInProgress.findAll({where:{classId:req.params.classId}})
    res.json({data:checkInclass})
})

const getSessionsFromOneStudents = asyncWrapper(async (req, res) => {
    const checkInclass = await ClassesInProgress.findAll({where:{studentId:req.params.studentId}})
    res.json({data:checkInclass})
})

const updateStudentSessions = roleGuard(async (req, res) => {
    let {id, toDeleteId,cursing} = req.body.checkInclass
    const classSession = await ClassesInProgress.findOne({ where: { id } });

    if (classSession) {
        await ClassesInProgress.update({toDeleteId,cursing},{where:{id}});
    }

    res.status(200).json({
        data:'updated'
    })
},1)

const deleteStudentSessions = roleGuard(async (req, res) => {
    const { toDeleteId } = req.body
    const deletedSession = await ClassesInProgress.destroy({where: {id:toDeleteId}});

    if (deletedSession > 0) {
        res.status(200).json({
            data:'deleted'
        })
    }else{
        res.status(404).json({data:'not found'})
    }
},1)


module.exports = {
    addStudentToClass,
    getStudentsFromClass,
    getSessionsFromOneStudents,
    updateStudentSessions,
    deleteStudentSessions
}