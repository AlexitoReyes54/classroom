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
const validateJwt = require('./../../../shared/middlewares/validateJwt')

router.get('/all',validateJwt,getAllClasses)
router.get('/class/:classId',validateJwt,getOneClass)
router.get('/teacher/:teacherId',validateJwt,getOneTeacherClasses)
router.post('/create',validateJwt,createClass)
router.put('/',validateJwt,updateClass)
router.delete('/',validateJwt,deleteClass)


module.exports = router;