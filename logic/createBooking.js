const { Booking } = require('../models')
const ObjectId = require('mongodb').ObjectId;


async function createNewBooking(userId, bookingInfo) {

    const { startDate, endDate, portId, boatId } = bookingInfo

    console.log(bookingInfo)
    const newBooking = await Booking.create({ startDate, endDate, port: new ObjectId(portId), boat: new ObjectId(boatId), user: new ObjectId(userId) })

    return newBooking
}

module.exports = createNewBooking


