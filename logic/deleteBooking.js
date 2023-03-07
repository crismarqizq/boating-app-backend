const { Booking } = require('../models')
const ObjectId = require('mongodb').ObjectId;

async function deleteBooking(bookingId) {

    const result = await Booking.deleteOne({ _id: new ObjectId(bookingId) })

    return result
}

module.exports = deleteBooking