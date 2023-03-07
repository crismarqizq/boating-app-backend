const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;

    // Get user's token
    const userTokenHeader = req.headers["authorization"];
    // userTokenHeader = Bearer eyJ............
    const userToken = userTokenHeader.substring(7);
    // userToken = eyJ....

    const payload = jwt.verify(userToken, jwtSecret);

    // Set user in request context
    req.user = {
      id: payload.sub,
      email: payload.email,
    };

    return next();
  } catch (error) {
    res.status(401).send({ message: "Not authenticated" });
  }
};
