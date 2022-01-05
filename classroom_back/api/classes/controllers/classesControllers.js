const asyncWrapper = require('./../../../shared/middlewares/async')
const Class = require('./../../../shared/models/Class')
const {adminGuard} = require('./../../../shared/middlewares/verifyRole')


const createClass = adminGuard(async (req, res) => {
    const classSession = await Class.create(req.body.class)
    res.json({classSession})
})

const getOneClass = asyncWrapper(async (req, res) => {
    const classSession = await Class.findOne({where:{id:req.params.id}})
    res.json({classSession})
})

const getOneTeacherClasses = asyncWrapper(async (req, res) => {
    const classSession = await Class.findAll({where:{teacherId:req.params.teacherId}})
    res.json({classSession})
})


const getAllClasses = asyncWrapper(async (req, res) => {
    const classSession = await Class.findAll()
    res.json({classSession})
})

const updateClass = adminGuard(async (req, res) => {
    let {id,teacherId,name} = req.body.class
    const classSession = await Class.findOne({ where: { id } });

    if (classSession) {
        await Class.update({name,teacherId},{where:{id}});
    }

    res.status(200).json({
        data:'updated'
    })
})

const deleteClass = adminGuard(async (req, res) => {
    const { toDeleteId } = req.body
    const deletedClass = await Class.destroy({where: {id:toDeleteId}});

    if (deletedClass > 0) {
        res.status(200).json({
            data:'deleted'
        })
    }else{
        res.status(404).json({data:'not found'})
    }
})



module.exports = {
    createClass,
    getOneClass,
    getAllClasses,
    getOneTeacherClasses,
    updateClass,
    deleteClass
}