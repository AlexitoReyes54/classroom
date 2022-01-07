const User = require('./../../../shared/models/User')
const asyncWrapper = require('./../../../shared/middlewares/async')
const { sendProperResponse } = require('../../../shared/helpers/handleData')
const {generateToken} = require('./../../../shared/helpers/Jwt')



  
const createUser = asyncWrapper(async (req, res) => {
    let {name , roleId, password} = req.body;
    const userNameExist = await User.findOne({where:{name}})
    if (userNameExist) {
        res.send('the username exist')
    }{
        const user = await User.create({name , roleId, password})
        sendProperResponse(res,user)
    }
})

const authenticateUser = asyncWrapper(async (req, res) => {
    let { name, password} = req.body
    const user = await User.findOne({where:{name,password}})
 
    if (user){
         delete user.dataValues.password 
         delete user.dataValues.createdAt
         delete user.dataValues.updatedAt
         let token =  generateToken(user.id)
         user.dataValues.token = token
        res.status(200).json(user) //user added
    } else{
        res.json({data:'user not found'})
    }

    
})


module.exports = {
    createUser,
    authenticateUser
}