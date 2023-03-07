const authenticateUser = require("../logic/authenticateUser");
const jwt = require("jsonwebtoken");
const { HttpException } = require("../utils/httpException");

module.exports = async (req, res) => {
  let { email, password } = req.body;

  try {
    const dbUser = await authenticateUser(email, password);

    const tokenSecret = process.env.JWT_SECRET;
    const tokenPayload = {
      sub: dbUser._id,
      name: dbUser.name,
      email: dbUser.email,
    };

    const userToken = jwt.sign(tokenPayload, tokenSecret, { expiresIn: "7d" });

    res.status(200).send({ token: userToken });
  } catch (error) {
    console.log(error);
    if (error instanceof HttpException) {
      console.log(error.message);
      res.status(error.statusCode);
      return res.json({ message: error.message });
    }

    res.status(500);
    res.json({ message: error.message });
  }
};
