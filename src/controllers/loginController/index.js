const loginServices = require('../../services/user/loginServices')
const {handleHttpError} = require('../../utils/handleError')

async function login (req,res){
    try{
        const data = await loginServices(req,res)
        res.send({data})

    }catch(err){
        handleHttpError('ERROR')
    }
}

module.exports = {login}