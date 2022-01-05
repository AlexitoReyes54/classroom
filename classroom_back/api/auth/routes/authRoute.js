var express = require('express')
var router = express.Router()
let { createUser,authenticateUser} = require('./../controllers/authController')
const validateJwt = require('./../../../shared/middlewares/validateJwt')

router.post('/singUp',validateJwt,createUser)
router.post('/singIn',authenticateUser)


module.exports = router;