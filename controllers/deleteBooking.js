const deleteBooking = require("../logic/deleteBooking");

module.exports = async (req, res) => {
  const bookingId = req.params.bookingId;

  try {
    await deleteBooking(bookingId);
    res.status(200).send();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
