const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const User = require('../../entities/user')

const findUserServices = async (req,res) => {
    try{
        req = matchedData(req)
     
        const {limit, page} = req
        const userList = await User.paginate({},{limit,page})

        return userList
    }catch(err){
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }
}

module.exports = findUserServices