const updateBooking = require("../logic/updateBooking");

module.exports = async (req, res) => {
  const bookingId = req.params.bookingId;
  const bookingInfo = req.body;

  try {
    const booking = await updateBooking(bookingId, bookingInfo);

    const bookingObject = booking.toObject();
    bookingObject.id = bookingObject._id;

    delete bookingObject._id;

    res.status(200).send(bookingObject);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
