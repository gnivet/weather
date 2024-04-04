const apiKey = '5f1b9d82972923335a93993455857f3a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const apiInput = document.getElementById('apiInput');
const apiButton = document.getElementById('apiButton');
const locationElement = document.getElementById('location');
const locationConstElement = document.getElementById('locationConst');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const latitudeElement = document.getElementById('latitude');
const longitudeElement = document.getElementById('longitude');
const cityElement = document.getElementById('city');
const pressureElement = document.getElementById('pressure');
const humidityElement = document.getElementById('humidity');
const temp_minElement = document.getElementById('temp_min');
const temp_maxElement = document.getElementById('temp_max');
const windElement = document.getElementById('wind');
const feels_likeElement = document.getElementById('feels_like');

searchButton.addEventListener('click', () => {
    let location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }  
    
});

apiButton.addEventListener('click', () => {
    let location = 'Cognac';      
        
    if (location)
    {
        fetchWeather(location);
        locationInput.textContent = `${(location)}`;
    }
      
});

function fetchWeather(location) {
   let url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
            descriptionElement.textContent = data.weather[0].description;
            feels_likeElement.textContent = `Feels like:${Math.round(data.main.feels_like)}`;         
            temperatureElement.textContent = `Temp :${Math.round(data.main.temp)} °C`;         
            longitudeElement.textContent = `Longitude: ${(data.coord.lon)}`;
            latitudeElement.textContent = `Latitude: ${(data.coord.lat)}`;   
            pressureElement.textContent = `Pressure: ${(data.main.pressure)}`;  
            humidityElement.textContent = `Humidity: ${(data.main.humidity)}`;  
            temp_minElement.textContent = `Temp min: ${(data.main.temp_min)} °C`; 
            temp_maxElement.textContent = `Temp max: ${(data.main.temp_max)} °C`;  
            windElement.textContent = `Wind: ${(data.wind.speed)} Milles/heure`;
                                  
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
};




