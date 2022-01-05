
const sendProperResponse = (res,data) => {
    if (data) {
        console.log("zero");
        res.status(201).json({ data })
    }else{
        res.status(404).json({data:'error'})
    }
}

const hasAdminPermission =  (req) =>{
    if (req.headers.role === '2') {
        return true
    }else{
        return false
    }
    
  }

module.exports = {
    sendProperResponse,
    hasAdminPermission
}