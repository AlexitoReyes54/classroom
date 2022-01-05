const {identifyRole} = require('../helpers/handleData') 

const roleGuard = (fn,role) => {
    return async (req, res, next) => {
      try {

       if (identifyRole(req.headers.role,role)) {
            await fn(req, res, next)
       }else{
           res.status(403).json({
               data:'permison deinied'
           })
       }

      } catch (error) {
        next(error)
      }
    }
  }


 
  
  module.exports = {
    roleGuard
    }