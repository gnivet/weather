# weather-web-app
simple web application to check the current weather state

## CITY & API KEY

To make sure the web app works properly you should use your own city and API KEY in the config.json file. <br>
This web app is using the `openweathermap` API.

## config.json
Replace ${city} and ${apiKey} with the actual values you intend to use. This JSON structure allows you to store configuration information for your setup, where city and apiKey are placeholders for the specific values you want to provide.


## api.openweathermap.org (city, apiKey)
https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}

## bellow one api call with 2 parameters (Zip code and apiKey) the answer
https://api.openweathermap.org/geo/1.0/zip?zip={16100},fr&appid=5f1b9d82972923335a93993455857f3a

## Answer

{"zip":"16100","name":"Cognac","lat":45.7,"lon":-0.3333,"country":"FR"}

## api.openweathermap.org (latitude, longitude, metric(nbr), apiKey)
https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}

## Bellow one api call with latitude, longitude, metric(nbr), apiKey parameters
https://api.openweathermap.org/data/2.5/weather?lat=45.7&lon=-0.3333&units=5&appid=5f1b9d82972923335a93993455857f3a

## Answer

{"coord":{"lon":-0.3333,"lat":45.7},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":283.01,"feels_like":281.76,"temp_min":282.33,"temp_max":283.86,"pressure":1005,"humidity":96},"visibility":10000,"wind":{"speed":2.57,"deg":250},"clouds":{"all":75},"dt":1702464813,"sys":{"type":1,"id":6452,"country":"FR","sunrise":1702452811,"sunset":1702484240},"timezone":3600,"id":3024440,"name":"Cognac","cod":200}