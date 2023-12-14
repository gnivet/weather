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
const cityElement = document.getElementById('city');


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
            longitudeElement.textContent = `Longitude: ${(data.coord.lon)}`;
            latitudeElement.textContent = `Latitude: ${(data.coord.lat)}`;            
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}; 


