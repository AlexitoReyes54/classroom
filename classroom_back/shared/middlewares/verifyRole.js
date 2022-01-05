const {hasAdminPermission} = require('../helpers/handleData') 

const adminGuard = (fn) => {
    return async (req, res, next) => {
      try {

       if (hasAdminPermission(req)) {
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
      adminGuard
    }