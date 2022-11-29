const User = require('../../../entities/user')
const{handleHttpError} = require('../../../utils/handleError')

const authMongoValidator = async (req,res, next) => {
    const {email} = req.body
    const emailCount = await User.exists({email:email})
    
    if(emailCount){
        handleHttpError(res,'DUPLICATE EMAIL', 409)
    }else{
        next()
    }
}

module.exports = {authMongoValidator}