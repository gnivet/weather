const apiKey = "de6b4bb39d2cb98c9fef2eac9c439ff2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const apiInput = document.getElementById("apiInput");
const apiButton = document.getElementById("apiButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const latitudeElement = document.getElementById("latitude");
const longitudeElement = document.getElementById("longitude");
const cityElement = document.getElementById("city");
const pressureElement = document.getElementById("pressure");
const humidityElement = document.getElementById("humidity");
const temp_minElement = document.getElementById("temp_min");
const temp_maxElement = document.getElementById("temp_max");
const windElement = document.getElementById("wind");
const feels_likeElement = document.getElementById("feels_like");
const idElement = document.getElementById("id");

const wrapper = document.querySelector(".wrapper");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

apiButton.addEventListener("click", () => {
  getApi();
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      feels_likeElement.textContent = `Feels like: ${Math.round(
        data.main.feels_like
      )} °C`;
      temperatureElement.textContent = `Temp: ${Math.round(data.main.temp)} °C`;
      descriptionElement.textContent = `weather: ${data.weather[0].description}`;
      windElement.textContent =
        `wind: ${data.wind.speed} nd ` +
        `or ${Math.round((data.wind.speed * 1852) / 1000)} km/h`;
      longitudeElement.textContent = `Longitude: ${data.coord.lon}`;
      latitudeElement.textContent = `Latitude: ${data.coord.lat}`;
      pressureElement.textContent = `Pressure: ${data.main.pressure}`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}`;
      temp_minElement.textContent = `Temp min: ${data.main.temp_min} °C`;
      temp_maxElement.textContent = `Temp max: ${data.main.temp_max} °C`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function getApi() {
  const url = `${apiUrl}?q=${"toulouse"}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      feels_likeElement.textContent = `Feels like: ${Math.round(
        data.main.feels_like
      )} °C`;
      temperatureElement.textContent = `Temp: ${Math.round(data.main.temp)} °C`;
      descriptionElement.textContent = `weather: ${data.weather[0].description}`;
      windElement.textContent =
        `wind: ${data.wind.speed} nd ` +
        `or ${Math.round((data.wind.speed * 1852) / 1000)} km/h`;
      longitudeElement.textContent = `Longitude: ${data.coord.lon}`;
      latitudeElement.textContent = `Latitude: ${data.coord.lat}`;
      pressureElement.textContent = `Pressure: ${data.main.pressure}`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}`;
      temp_minElement.textContent = `Temp min: ${data.main.temp_min} °C`;
      temp_maxElement.textContent = `Temp max: ${data.main.temp_max} °C`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
