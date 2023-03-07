const { Booking } = require('../models')
const ObjectId = require('mongodb').ObjectId;

async function getUserBookings(userId) {

    const userBookings = await Booking.find({ owner: new ObjectId(userId) }).sort({startDate : 'ascending'})
    return userBookings

}

module.exports = getUserBookings