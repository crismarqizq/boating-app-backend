const { Port } = require("../models");

async function getPorts() {
  const ports = await Port.find();
  return ports;
}

module.exports = getPorts;
