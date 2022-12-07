const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const User = require('../../entities/user')

const findUserServices = async (req,res) => {
    try{
        req = matchedData(req)
        console.log(req)
        const {limit, page} = req
        const userList = await User.paginate({},{limit,page})

        res.json({userList}).status(200)
    }catch(err){
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }
}

module.exports = findUserServices