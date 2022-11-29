const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorRegister = [
    check('name')
    .exists()
    .notEmpty()
    .isLength({min:3, max:19}),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

const validatorLogin = [
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

const validatorGetUser = [
    check('limit')
    .default(5)
    .isNumeric(),
    check('page')
    .default(1)
    .isNumeric(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorRegister,
    validatorLogin,
    validatorGetUser
}