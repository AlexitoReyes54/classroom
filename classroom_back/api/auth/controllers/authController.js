const User = require('./../../../shared/models/User')
const asyncWrapper = require('./../../../shared/middlewares/async')
const { sendProperResponse } = require('../../../shared/helpers/handleData')

const createUser = asyncWrapper(async (req, res) => {
    const user = await User.create(req.body.user)
    sendProperResponse(res,user)
})

const authenticateUser = asyncWrapper(async (req, res) => {
    let { name, password} = req.body.user
    const user = await User.findOne({where:{name,password}})
    
    if (user){
         delete user.dataValues.password
        res.status(200).json({user})
    } else{
        res.status(404).json({data:'user not found'})
    }

    
})


module.exports = {
    createUser,
    authenticateUser
}