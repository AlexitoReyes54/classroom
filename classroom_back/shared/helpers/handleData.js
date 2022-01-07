
const sendProperResponse = (res,data) => {
    if (data) {
        res.status(201).json( data )
    }else{
        res.status(404).json({data:'error'})
    }
}

const identifyRole =  (reqRuestole,role) =>{
    if (reqRuestole === role.toString()) {
        return true
    }else{
        return false
    }
    
  }

module.exports = {
    sendProperResponse,
    identifyRole
}