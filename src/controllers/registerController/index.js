const registerServices = require('../../services/user/registerServices')

async function register (req,res){
    const data = await registerServices(req,res)
    res.send({data})
}

module.exports = {register}