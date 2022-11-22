const bcrypt = require('bcrypt')

const encrypt = async (passwordPlain) => {
    const hash = await bcrypt.hash(passwordPlain, 10)
    return hash
}

const compare = async (passwordPlain, hashpassword) => {
    return await bcrypt.compare(passwordPlain, hashpassword)
}

module.exports = {
    encrypt,
    compare
}