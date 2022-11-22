const express = require('express')
const router = express.Router()
const {validatorLogin, validatorRegister}= require('../../validators/auth')
const {login,register} = require('../user/controllers')

router.post('/register', [validatorRegister], register )

router.post('/login',[validatorLogin], login)

module.exports = router
