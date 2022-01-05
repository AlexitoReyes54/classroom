var express = require('express')
var router = express.Router()
const { getAllTeachers, 
        getAllStudents,
        getOneStudent,
        getOneTeacher,
        updateUser,
        deleteUser
    } = require('./../controllers/handleUsersController');

router.get('/teachers',getAllTeachers)
router.get('/students',getAllStudents)
router.get('/student/:id',getOneStudent)
router.get('/teacher/:id',getOneTeacher)
router.put('/user',updateUser)
router.delete('/user',deleteUser)

module.exports = router;