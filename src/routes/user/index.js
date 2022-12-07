const express = require('express')
const router = express.Router()
const {validatorLogin, validatorRegister, validatorGetUser}= require('../../middlewares/validators/user/auth')
const {authMiddleware} = require('../../middlewares/session')
const loginServices = require('../../services/user/loginServices')
const registerServices = require('../../services/user/registerServices')
const findUserServices = require ('../../services/user/findUserServices')
const {checkRole} = require('../../middlewares/role')

router.post('/register', [validatorRegister], registerServices )
router.post('/login',[validatorLogin], loginServices)

router.get('/find-user',[validatorGetUser,authMiddleware,checkRole(['admin'])], findUserServices)

module.exports = router