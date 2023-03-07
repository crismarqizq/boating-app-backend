const getPorts = require("../logic/getPorts");
const { WeatherService } = require("../services/weather");

module.exports = async (req, res) => {
  try {
    const fetchWeatherInfo = req.query.weather ? true : false;

    const ports = await getPorts();

    if (!fetchWeatherInfo) {
      return res.status(200).send(ports);
    }

    const weatherService = new WeatherService();

    const portsResponse = [];

    for (const port of ports) {
      const lat = port.coordinates[0];
      const lon = port.coordinates[1];

      const weatherInfoResponse = await weatherService.getWeatherByCoordinates(
        lat,
        lon
      );
      const portObject = port.toObject();
      portObject["weather"] = weatherInfoResponse;

      portsResponse.push(portObject);
    }

    res.status(200).send(portsResponse);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
