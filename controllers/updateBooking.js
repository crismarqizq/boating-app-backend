const updateBooking = require("../logic/updateBooking");

module.exports = async (req, res) => {
  const bookingId = req.params.bookingId;
  const bookingInfo = req.body;

  try {
    const edited = await updateBooking(bookingId, bookingInfo);

    const modified = edited ? true : false;

    res.status(200).send({ modified });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
