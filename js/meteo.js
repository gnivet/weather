//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=048.853&lon=002.349&appid=5f1b9d82972923335a93993455857f3a

//https://api.openweathermap.org/data/2.5/weather?lat=034.052&lon=-118.244&appid=5f1b9d82972923335a93993455857f3a

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q=paris&appid=5f1b9d82972923335a93993455857f3a

//https://maps.googleapis.com/maps/api/js?key=AIzaSyCKfAjDmj-DgmTBOK_grsB8THk2Ubrd2yE&callback=console.debug&libraries=maps,marker&v=beta
const apiKey = "5f1b9d82972923335a93993455857f3a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const apiInput = document.getElementById("apiInput");
const apiButton = document.getElementById("apiButton");
const locationElement = document.getElementById("location");
const locationConstElement = document.getElementById("locationConst");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const iconElement = document.getElementById("weather-icon");
const latitudeElement = document.getElementById("latitude");
const longitudeElement = document.getElementById("longitude");
const cityElement = document.getElementById("city");
const countryElement = document.getElementById("country");
const pressureElement = document.getElementById("pressure");
const humidityElement = document.getElementById("humidity");
const temp_minElement = document.getElementById("temp_min");
const temp_maxElement = document.getElementById("temp_max");
const windElement = document.getElementById("wind");
const feels_likeElement = document.getElementById("feels_like");
const unitsInputList = document.getElementById("unitsInputList");
const languesInputList = document.getElementById("languesInputList");
let mapInput = document.getElementById("map");

searchButton.addEventListener("click", () => {
  let location = locationInput.value;
  let units = unitsInputList.value;
  let langues = languesInputList.value;

  if (location && units && langues) {
    fetchWeather(location, units, langues);
  } else {
    initMessage(langues);
  }
});

apiButton.addEventListener("click", () => {
  let location = "Cognac";
  let units = unitsInputList.value;
  let langues = languesInputList.value;

  if (location && units && langues) {
    fetchWeather(location, units, langues);
  }
});

async function fetchWeather(location, units, langues) {
  /* For temperature in Fahrenheit use units=imperial
     For temperature in Celsius use units=metric  */
  let url = `${apiUrl}?q=${location}&lang=${langues}&appid=${apiKey}&units=${units}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      descriptionElement.textContent = data.weather[0].description;
      iconElement.textContent = data.weather[0].icon;
      let weatherCondition = iconElement.textContent; // Exemples de valeurs : 01d, 02d, etc.
      let weatherIcon = document.getElementById("weather-icon");
      weatherIcon.src = `https://openweathermap.org/img/wn/${weatherCondition}@2x.png`;

      switch (units) {
        case "metric":
          feels_likeElement.textContent = `Feels like: ${Math.round(
            data.main.feels_like
          )} C°`;
          temperatureElement.textContent = `Temp: ${Math.round(
            data.main.temp
          )} C°`;
          temp_minElement.textContent = `Temp min: ${data.main.temp_min} C°`;
          temp_maxElement.textContent = `Temp max: ${data.main.temp_max} C°`;
          break;
        case "imperial":
          feels_likeElement.textContent = `Feels like: ${Math.round(
            data.main.feels_like
          )} °F`;
          temperatureElement.textContent = `Temp: ${Math.round(
            data.main.temp
          )} °F`;
          temp_minElement.textContent = `Temp min: ${data.main.temp_min} °F`;
          temp_maxElement.textContent = `Temp max: ${data.main.temp_max} °F`;
          break;
        default:
          feels_likeElement.textContent = `Feels like: ${Math.round(
            data.main.feels_like
          )} K`;
          temperatureElement.textContent = `Temp: ${Math.round(
            data.main.temp
          )} K`;
          temp_minElement.textContent = `Temp min: ${data.main.temp_min} K`;
          temp_maxElement.textContent = `Temp max: ${data.main.temp_max} K`;
      }

      longitudeElement.textContent = `Longitude: ${data.coord.lon}`;
      latitudeElement.textContent = `Latitude: ${data.coord.lat}`;
      pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
      humidityElement.textContent = `Humidity: ${data.main.humidity} %`;
      windElement.textContent = `Wind: ${data.wind.speed} m/h `;
      countryElement.textContent = `Country: ${data.sys.country} `;

      if (location === "" || data.name === "404") {
        //city not found
        clearZones();
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function clearZones() {
  locationElement.textContent = "";

  descriptionElement.textContent = "";
  iconElement.textContent = "";
  let weatherCondition = "01d";
  let weatherIcon = document.getElementById("weather-icon");
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherCondition}@2x.png`;
  feels_likeElement.textContent = "";
  temperatureElement.textContent = "";
  longitudeElement.textContent = "";
  latitudeElement.textContent = "";
  pressureElement.textContent = "";
  humidityElement.textContent = "";
  temp_minElement.textContent = "";
  temp_maxElement.textContent = "";
  windElement.textContent = "";
  countryElement.textContent = "";
}

function initMessage(langues) {
  switch (langues) {
    case "fr":
      alert("Veuillez entrer un nom de ville.");
      break;
    case "en":
      alert("Please enter a city name.");
      break;
    case "ch":
      alert("请输入城市名称.");
      break;
    case "ja":
      alert("都市名を入力してください。");
      break;
    case "sp":
      alert("Por favor ingrese el nombre de una ciudad.");
      break;
    case "de":
      alert("Bitte geben Sie einen Städtenamen ein.");
      break;
    case "it":
      alert("Inserisci il nome di una città.");
      break;
    default:
      alert("Please enter a city name.");

      break;
  }
}
