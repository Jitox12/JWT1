const {matchedData} = require('express-validator')
const {tokenSign} = require('../../utils/handleJwt')
const {handleHttpError} = require('../../utils/handleError')
const {encrypt} = require('../../utils/handlePassword')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')
const handleUpperCase = require('../../utils/handleUpperCase')
const User = require('../../entities/user')

const register = async (req,res) => {
    const user = new User()
    try{
    req = matchedData(req)
    
    const {name,email,password} = req
    const passwordHash = await encrypt(password)
    user.name = name
    user.email = email
    user.password = passwordHash

    const duplicated = await handleDuplicatedError('email',email,User)
    if(duplicated){
      handleHttpError(res,'EMAIL_DUPLICATED', 409)
      return
    }

    const dataUser = await user.save()
    dataUser.set('password', undefined, {strict:false})
    res.json('USER_REGISTER').status(200)
    
    }catch(err){
        handleHttpError(res,'ERROR_REGISTER_USER')
    }
}
module.exports = register