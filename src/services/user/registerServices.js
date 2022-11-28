const {matchedData} = require('express-validator')
const {tokenSign} = require('../../utils/handleJwt')
const {handleHttpError} = require('../../utils/handleError')
const {encrypt} = require('../../utils/handlePassword')
const User = require('../../entities/user')

const register = async (req,res) => {
    try{
    req = matchedData(req)
    const passwordHash = await encrypt(req.password)
    const body = {...req, password: passwordHash}
    const dataUser = await User.create(body)
    dataUser.set('password', undefined, {strict:false})

    const data = {
        token:tokenSign(dataUser),
        user: dataUser
    }
    return data
    
    }catch(err){
        handleHttpError(res,'ERROR_REGISTER_USER')
    }
}
module.exports = register