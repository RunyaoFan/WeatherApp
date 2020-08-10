# WeatherApp

This app taps into an API provided by https://openweathermap.org/ to allow the user to search for weather of a city specified by the user input.

To set it up on your local environment, you need to have an API key from https://openweathermap.org/ to access their data. After you have gotten an API key, create a file myKey.js under the directory and input 
```
module.exports = "$yourKey";
```

Afterward, run the command to start the server which can be accessed on the browser by localhost:3000
```
node app
```
