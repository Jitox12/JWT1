const express = require('express')
const router = express.Router()
require('dotenv').config({path:'./src/config/.env'})

const API_VERSION = process.env.API_VERSION

const userRoutes = require('../components/user/routes')

router.use(`/api/${API_VERSION}`, userRoutes)

module.exports = router