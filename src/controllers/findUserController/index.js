const findUserServices = require('../../services/user/findUserServices')
const {handleHttpError} = require('../../utils/handleError')

async function findUser (req,res){
    try{
        const data = await findUserServices(req,res)
        res.send({data})

    }catch(err){
        handleHttpError('ERROR')
    }
}

module.exports = {findUser}