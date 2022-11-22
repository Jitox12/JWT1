const {matchedData} = require('express-validator')
const {tokenSign} = require('../../../../utils/handleJwt')
const {handleHttpError} = require('../../../../utils/handleError')
const {mongoUser} = require('../../models/index')

const login = async (req, res)=> {
    try{
        req = matchedData(req)
        const user = await mongoUser.findOne({email:req.email}).select('password name role email')
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
        res.send(data)


    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }
}

module.exports = login