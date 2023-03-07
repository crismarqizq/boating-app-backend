const registerBoat = require("../logic/registerBoat");

module.exports = async (req, res) => {
  try {
    const userId = req.user.id;
    const newBoat = await registerBoat(userId, req.body);
    const boatInfo = newBoat.toObject();

    res.status(201).send(boatInfo);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: error.message });
  }
};
