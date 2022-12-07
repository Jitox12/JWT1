require('dotenv').config({ path: './src/config/.env' })

const API_VERSION = process.env.API_VERSION
const IP_SERVER = process.env.IP_SERVER
const PORT_SERVER = process.env.PORT_SERVER

const server = (app) => {
app.listen(PORT_SERVER, () => {
    console.log(`mongodb://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}`)
  })
}


module.exports = server