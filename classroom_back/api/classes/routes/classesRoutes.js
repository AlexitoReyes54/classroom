var express = require('express')
var router = express.Router()
let {
    createClass,
    getOneClass,
    getAllClasses,
    getOneTeacherClasses,
    updateClass,
    deleteClass
} = require('./../controllers/classesControllers')

router.get('/all',getAllClasses)
router.get('/class/:classId',getOneClass)
router.get('/teacher/:teacherId',getOneTeacherClasses)
router.post('/create',createClass)
router.put('/',updateClass)
router.delete('/',deleteClass)


module.exports = router;