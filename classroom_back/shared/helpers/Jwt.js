const jwt = require('jsonwebtoken');

const generateToken = (data) =>{ 
    return jwt.sign(data, process.env.JWT_SECRET_KEY);
}
const validateToken = (token) =>{
    try {
        if(jwt.verify(token , process.env.JWT_SECRET_KEY)){
            return true
        }else{
            return false
        }
    } catch (error) { 
        return false
    }
}

module.exports = {
    generateToken,
    validateToken
}