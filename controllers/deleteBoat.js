const deleteBoat = require("../logic/deleteBoat");

module.exports = async (req, res) => {
  const boatId = req.params.boatId;

  try {
    await deleteBoat(boatId);
    res.status(200).send();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
