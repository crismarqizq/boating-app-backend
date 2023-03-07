const registerUser = require("../logic/registerUser");
const jwt = require("jsonwebtoken");
const { HttpException } = require("../utils/httpException");

module.exports = async (req, res) => {
  try {
    const userInfo = req.body;

    if (!userInfo.password || userInfo.password.length < 6) {
      throw new HttpException(400, "invalid password");
    }

    if (!userInfo.email || userInfo.email.length < 6) {
      throw new HttpException(400, "invalid email");
    }

    const newUser = await registerUser(userInfo);

    const tokenSecret = process.env.JWT_SECRET;
    const tokenPayload = {
      sub: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };

    const userToken = jwt.sign(tokenPayload, tokenSecret, { expiresIn: "7d" });

    res.status(201).send({ token: userToken });
  } catch (error) {
    if (error instanceof HttpException) {
      console.log(error.message);
      res.status(error.statusCode);
      return res.json({ message: error.message });
    }
    res.status(500);
    res.json({ message: error.message });
  }
};
