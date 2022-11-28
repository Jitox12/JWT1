const {matchedData} = require('express-validator')
const {tokenSign} = require('../../utils/handleJwt')
const {handleHttpError} = require('../../utils/handleError')
const User = require('../../entities/user')
const {compare} = require('../../utils/handlePassword')

const loginServices = async (req,res) => {
    try{
        req = matchedData(req)
        const user = await User.findOne({email:req.email}).select('password name role email')
        if(!user){
            handleHttpError(res,'USER_NOT_EXISTS',404)
            return
        }
        const hashPassword = user.get('password')
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, 'PASSWORD_INVALID', 401)
            return
        }
        user.set('password',undefined,{strict: false})

        const data = {
            token:tokenSign(user),
            user
        }
        return data

    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }
}

module.exports = loginServices