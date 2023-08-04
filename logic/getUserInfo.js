const { User } = require("../models");
const ObjectId = require("mongodb").ObjectId;

async function getUserInfo(userId) {
  const userInfo = await User.findOne({ _id: new ObjectId(userId) });
  return userInfo;
}

module.exports = getUserInfo;
