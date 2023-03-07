const { User } = require('../models')
const context = require('./context')

async function registerUser(registerInformation) {

    const { name, surname, birthDate, idNumber, email, contactNumber, address, password } = registerInformation
    const newUser = await User.create({ name, surname, birthDate, idNumber, email, contactNumber, address, password })

    return newUser
}

module.exports = registerUser