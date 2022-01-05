const { validateToken} = require('./../helpers/Jwt')


const validateJwt =  async (req, res, next) => {
    console.log('token: ', req.headers.token);
    try {
        if (validateToken(req.headers.token)) {
            next()
        }else{
            res.status(403).json({
                data:'unauthorized'
            })
        }
    } catch (error) {
        res.status(403).json({
            data:'unauthorized'
        })
    }
}
  
  
  module.exports = validateJwt