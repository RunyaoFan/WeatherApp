const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const myKey = require(__dirname + "/myKey.js");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
  const cityQuery = req.body.inputCity;
  const urlAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&units=metric&appid=" + myKey;
  https.get(urlAPI, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const iconURL = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";

      res.render("index", {
        cityInput: cityQuery,
        cityTemp: temp,
        weatherInfo: description,
        weatherImg: iconURL
      });
    })
  })
})

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
