const { Booking } = require("../models");
const ObjectId = require("mongodb").ObjectId;

async function createNewBooking(userId, bookingInfo) {
  const { startDate, endDate, port, boat } = bookingInfo;

  const newBooking = await Booking.create({
    startDate,
    endDate,
    port: new ObjectId(port),
    boat: new ObjectId(boat),
    user: new ObjectId(userId),
  });

  return newBooking;
}

module.exports = createNewBooking;
