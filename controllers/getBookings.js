const getUserBookings = require("../logic/getBookings");

module.exports = async (req, res) => {
  const userId = req.user.id;
  try {
    const bookings = await getUserBookings(userId);
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
