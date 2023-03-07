const axios = require("axios");

class WeatherService {
  constructor() {
    this.apiKey = process.env.WEATHER_API_KEY;
    this.baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric`;
  }

  async getWeatherByCoordinates(lat, lon) {
    const url = `${this.baseURL}&lat=${lat}&lon=${lon}`;

    try {
      const response = await axios.get(url);
      const responseData = response.data;

      // Prepare the response object
      const weatherInfo = {};

      const responseIcon = responseData.weather[0].icon;
      const responseMain = responseData.weather[0].main;
      const responseTemperature = responseData.main.temp;
      const responseHumidity = responseData.main.humidity;
      const responseWindSpeed = Math.floor(responseData.wind.speed * 1.94384);

      weatherInfo["icon"] = responseIcon;
      weatherInfo["main"] = responseMain;
      weatherInfo["temperature"] = responseTemperature;
      weatherInfo["humidity"] = responseHumidity;
      weatherInfo["windSpeed"] = responseWindSpeed;

      return weatherInfo;
    } catch (error) {
      console.error("Unable to fetch data from Weather API");
      return null;
    }
  }
}

module.exports = { WeatherService };
