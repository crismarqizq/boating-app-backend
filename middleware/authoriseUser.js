const ObjectId = require("mongodb").ObjectId;
const { Booking } = require("../models");
const { Boat } = require("../models");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  try {
    const userId = req.user.id;

    if (req.params.bookingId) {
      const bookingId = req.params.bookingId;
      console.log("Checking bookingId ownership");

      const booking = await Booking.findOne({
        _id: new ObjectId(bookingId),
        user: new ObjectId(userId),
      });

      if (!booking) {
        console.log("Booking ownership condition could not be satisfied");
        return res.status(401).send({ message: "Not authorised" });
      }
    }

    if (req.params.boatId) {
      console.log("Checking boatId ownership");

      const boatId = req.params.boatId;

      const boat = await Boat.findOne({
        _id: new ObjectId(boatId),
        owner: new ObjectId(userId),
      });

      if (!boat) {
        console.log("Booking ownership condition could not be satisfied");
        return res.status(401).send({ message: "Not authorised" });
      }
    }

    if (req.params.userId) {
      console.log("Checking userId");

      const requestUserId = req.params.userId;
      const userId = req.user.id;

      const isSelf = userId === requestUserId;

      if (!isSelf) {
        console.log("User ownership condition could not be satisfied");
        return res.status(401).send({ message: "Not authorised" });
      }
    }

    return next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Not authorised" });
  }
};
