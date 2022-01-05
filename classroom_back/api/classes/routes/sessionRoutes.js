var express = require('express')
var router = express.Router()
let {
    addStudentToClass,
    getStudentsFromClass,
    getSessionsFromOneStudents,
    updateStudentSessions,
    deleteStudentSessions
} = require('./../controllers/sessionsControlller')


router.post('/add',addStudentToClass)
router.get('/class/:classId',getStudentsFromClass)
router.get('/student/:studentId',getSessionsFromOneStudents)
router.put('/update',updateStudentSessions)
router.delete('/delete',deleteStudentSessions)


module.exports = router;