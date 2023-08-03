const updateBoat = require("../logic/updateBoat");

module.exports = async (req, res) => {
  const boatId = req.params.boatId;
  const boatInfo = req.body;

  try {
    const boat = await updateBoat(boatId, boatInfo);

    const boatObject = boat.toObject();

    boatObject.id = boatObject._id;
    delete boatObject._id;

    res.status(200).send(boatObject);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
