const express = require('express')
const router = express.Router()
const {validatorLogin, validatorRegister, validatorGetUser}= require('../../middlewares/validators/user/auth')
const {authMongoValidator} = require('../../middlewares/validators/user/authMongo')
const {authMiddleware} = require('../../middlewares/session')
const {login} = require('../../controllers/loginController')
const {register} = require('../../controllers/registerController')
const {findUser} = require ('../../controllers/findUserController')

router.post('/register', [validatorRegister,authMongoValidator], register )
router.post('/login',[validatorLogin], login)

router.get('/find-user',[authMiddleware,validatorGetUser], findUser)

module.exports = router