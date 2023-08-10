const { Booking } = require("../models");
const ObjectId = require("mongodb").ObjectId;

async function getUserBookings(userId) {
  console.log(`getting bookings for ${userId}`);
  const userBookings = await Booking.find({ user: new ObjectId(userId) }).sort({ startDate: "ascending" });

  return userBookings;
}

module.exports = getUserBookings;
