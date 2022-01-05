var express = require('express')
var router = express.Router()
let { createUser,authenticateUser} = require('./../controllers/authController')


router.post('/singUp',createUser)
router.post('/singIn',authenticateUser)

module.exports = router;