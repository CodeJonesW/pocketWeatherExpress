const axios = require('axios')
const apiKey = process.env.apiKey

module.exports = {
    currentCityWeather: (city) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(data => {
          return data
        })
    }
}