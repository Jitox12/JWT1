const mongoose = require('mongoose')
require('dotenv').config({ path: './src/config/.env' })

const IP_SERVER = process.env.IP_SERVER
const PORT_DB = process.env.PORT_DB

const dbConnect = (app) => {
mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/generic_DDBB`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      throw err
    } else {
      console.log('La conexion a la base de datos es correcta')
    }
  }
)
}

module.exports = dbConnect