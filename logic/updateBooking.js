const { Booking } = require("../models");
const ObjectId = require("mongodb").ObjectId;

async function updateBooking(bookingId, bookingInfo) {
  console.log("Modify with", bookingInfo);

  const booking = await Booking.findOneAndUpdate({ _id: new ObjectId(bookingId) }, bookingInfo, { new: true });
  return booking;
}

module.exports = updateBooking;
