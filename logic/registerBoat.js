const { Boat } = require('../models')
const ObjectId = require('mongodb').ObjectId;


async function registerBoat(userId, boatInfo) {

    const { name, flag, regNumber, sail, length, beam, draft } = boatInfo
    const newBoat = await Boat.create({ name, flag, regNumber, sail, length, beam, draft, owner: new ObjectId(userId) })

    return newBoat
}

module.exports = registerBoat