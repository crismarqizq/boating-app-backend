const getUserBoats = require("../logic/getBoats");

module.exports = async (req, res) => {
  const userId = req.user.id;
  try {
    const boats = await getUserBoats(userId);
    res.status(200).send(boats);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
