const getUserInfo = require("../logic/getUserInfo");

module.exports = async (req, res) => {
  const userId = req.user.userId;

  try {
    const userInfo = await getUserInfo(userId);
    res.status(200).send(userInfo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
