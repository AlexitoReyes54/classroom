var express = require('express')
var router = express.Router()
let {
    addStudentToClass,
    getStudentsFromClass,
    getSessionsFromOneStudents,
    updateStudentSessions,
    deleteStudentSessions
} = require('./../controllers/sessionsControlller')
const validateJwt = require('./../../../shared/middlewares/validateJwt')

router.post('/add',validateJwt,addStudentToClass)
router.get('/class/:classId',validateJwt,getStudentsFromClass)
router.get('/student/:studentId',validateJwt,getSessionsFromOneStudents)
router.put('/update',validateJwt,updateStudentSessions)
router.delete('/delete',validateJwt,deleteStudentSessions)


module.exports = router;