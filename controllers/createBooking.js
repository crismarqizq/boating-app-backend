const createBooking = require("../logic/createBooking");

module.exports = async (req, res) => {
  try {
    const userId = req.user.id;
    const newBooking = await createBooking(userId, req.body);

    res.status(201).send(newBooking);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: error.message });
  }
};
