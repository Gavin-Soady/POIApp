'use strict';

const currentWeather = {

  getCurrentWeather: async function(lat,lon) {
    const apiKey = "cfd9ec36c5c610c679ec46cf057edfa7";
    const weatherRequest = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    console.log(`Weather API Key = ${apiKey}`);
    let weather = {};
    const response = await axios.get(weatherRequest)
    if (response.status == 200) {
      weather = response.data
    }
    console.log(weather)
    const report = {
      feelsLike : Math.round(weather.main.feels_like -273.15),
      clouds : weather.weather[0].description,

    }
    return report;
  },

};

module.exports = currentWeather;