const { Boat } = require('../models')
const ObjectId = require('mongodb').ObjectId

async function deleteBoat(boatId) {
    const result = await Boat.deleteOne({ _id: new ObjectId(boatId) })

    return result
}

module.exports = deleteBoat