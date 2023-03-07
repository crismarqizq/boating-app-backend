const updateUserInfo = require("../logic/updateUserInfo");

module.exports = async (req, res) => {
  const userId = req.params.userId;
  const userInfo = req.body;

  try {
    if (userInfo.idNumber) {
      return res.status(400).send({ message: "idNumber cannot be updated" });
    }

    if (userInfo.email) {
      return res.status(400).send({ message: "email cannot be updated" });
    }

    const edited = await updateUserInfo(userId, userInfo);

    const modified = edited ? true : false;

    res.status(200).send({ modified });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
