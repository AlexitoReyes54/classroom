var express = require('express')
var router = express.Router()
const { getAllTeachers, 
        getAllStudents,
        getOneStudent,
        getOneTeacher,
        updateUser,
        deleteUser
    } = require('./../controllers/handleUsersController');
const validateJwt = require('./../../../shared/middlewares/validateJwt')

router.get('/teachers',validateJwt,getAllTeachers)
router.get('/students',validateJwt,getAllStudents)
router.get('/student/:id',validateJwt,getOneStudent)
router.get('/teacher/:id',validateJwt,getOneTeacher)
router.put('/user',validateJwt,updateUser)
router.delete('/user',validateJwt,deleteUser)

module.exports = router;