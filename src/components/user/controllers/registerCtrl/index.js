const {matchedData} = require('express-validator')
const {tokenSign} = require('../../../../utils/handleJwt')
const {handleHttpError} = require('../../../../utils/handleError')
const {encrypt} = require('../../../../utils/handlePassword')
const {mongoUser} = require('../../models/index')

const register = async (req,res) => {
    try{
    req = matchedData(req)
    const passwordHash = await encrypt(req.password)
    const body = {...req, password: passwordHash}
    const dataUser = await mongoUser.create(body)
    dataUser.set('password', undefined, {strict:false})

    const data = {
        token:tokenSign(dataUser),
        user: dataUser
    }
    res.send({data})
    
    }catch(err){
        handleHttpError(res,'ERROR_REGISTER_USER')

    }
}

module.exports = register