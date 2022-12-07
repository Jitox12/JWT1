const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')
const dbConnect = require('./config/db/mongo')
const server = require('./index')

//Inicializador de rutas
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Configuración Cors
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))
dbConnect(app)
server(app)
app.use(router)

module.exports = app