const updateBoat = require("../logic/updateBoat");

module.exports = async (req, res) => {
  const boatId = req.params.boatId;
  const boatInfo = req.body;

  try {
    const edited = await updateBoat(boatId, boatInfo);

    const modified = edited ? true : false;

    res.status(200).send({ modified });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
