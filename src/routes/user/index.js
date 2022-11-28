const express = require('express')
const router = express.Router()
const {validatorLogin, validatorRegister}= require('../../middlewares/validators/auth')
const {login} = require('../../controllers/loginController')
const {register} = require('../../controllers/registerController')

router.post('/register', [validatorRegister], register )
router.post('/login',[validatorLogin], login)

module.exports = router