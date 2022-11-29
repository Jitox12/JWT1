const {validationResult} = require('express-validator')
const {handleHttpError} = require('../utils/handleError')

const validateResults = (req,res,next) => {
    try{
        validationResult(req).throw()
        return next()
    }catch(err){
       
        handleHttpError(res,'DATE_ERROR',400)
    }
}

module.exports = validateResults