var express = require('express');
var router = express.Router();
const axios = require('axios')
const apiKey = process.env.apiKey
const cors = require("cors")
/* GET home page. */
router.get('/', (req, res) => {
  res.send("pocketWeather API")
});


router.get('/api/currentWeather/:city', cors(), async (req, res) => {
  let city = await req.params.city
  let currentWeatherData = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
  let fiveDayForecastData = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)

  const completeWeatherData = await Promise.all([currentWeatherData, fiveDayForecastData])
 
  res.send({"currentWeather": completeWeatherData[0].data, "fiveDayForecast": completeWeatherData[1].data})


});

module.exports = router;
