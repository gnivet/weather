const apiKey = '5f1b9d82972923335a93993455857f3a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const apiInput = document.getElementById('apiInput');
const apiButton = document.getElementById('apiButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const latitudeElement = document.getElementById('latitude');
const longitudeElement = document.getElementById('longitude');
const humidityElement = document.getElementById('humidity');
const cityElement = document.getElementById('city');
/*
const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"),
  weatherPart = wrapper.querySelector(".weather-part"),
  wIcon = weatherPart.querySelector("img"),
  arrowBack = wrapper.querySelector("header i");
 */


searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }    
});

apiButton.addEventListener('click', () => {
     
        requestApi();
      
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
};


function requestApi(){
    const apiUrl2 = 'https://api.openweathermap.org/data/2.5/weather?lat=45.7&lon=-0.3333&units=5&appid=5f1b9d82972923335a93993455857f3a';    
    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            cityElement.textContent = data.name;           
            longitudeElement.textContent = `${Math.round(data.coord.lon)} Longitude`;
            latitudeElement.textContent = `${Math.round(data.coord.lat)} Latitude`;
            humidityElement.textContent = data.coord.humidity; 
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}; 
/*
function onError(error) {
    // if any error occur while getting user location then we'll show it in infoText
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
  }

function fetchData() {
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    // getting api response and returning it with parsing into js obj and in another
    // then function calling weatherDetails function with passing api result as an argument
    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      .catch(() => {
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
      });
  }*/