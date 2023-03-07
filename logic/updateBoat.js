const { Boat } = require('../models')
const ObjectId = require('mongodb').ObjectId

async function updateBoat(boatId, boatInfo) {
    console.log('Modify with', boatInfo)

    await Boat.findOneAndUpdate({ _id: new ObjectId(boatId) }, boatInfo, { new: true })
    return true
}

module.exports = updateBoat