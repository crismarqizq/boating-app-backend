const { User } = require("../models");
const { HttpException } = require("../utils/httpException");
const context = require("./context");

async function authenticateUser(email, password) {
  const user = await User.findOne({ email }).select("+password");

  if (!user || user.password !== password) {
    throw new HttpException(401, "invalid credentials");
  }

  return user;
}

module.exports = authenticateUser;
