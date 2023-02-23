// Tutorial by http://youtube.com/CodeExplained
// Alterations by Louisianish - See the following sections:
// - "Kouri-Vini weather description translations"
// - "when Fahrenheit is displayed upon loading"
// - "Search for a city"
// - "Add a function for city to be submitted upon pressing 'Enter'"
// To see my Louisiana Creole weather app, visit https://louisianish.github.io/weatherapp.kv/
// To view this GitHub repository with the README and my weather translation template, visit https://github.com/Louisianish/weatherapp.kv

// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "fahrenheit"
}

// APP CONSTS AND VARS
const KELVIN = 273.15;

// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function newFunction() {
    try { } finally { }
}

// SET USER'S POSITION
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`;

    console.log(api);
    
    fetch(api)
    .then(function(response) {
      let data = response.json();
      return data
      .then(function(data) {
          weather.temperature.value = Math.floor(data.main.temp);
          weather.description = data.weather[0].description;
          weather.iconId = data.weather[0].icon;
          weather.city = data.name;
          weather.country = data.sys.country;
      })
      .then(function() {
          displayWeather();
      });   
    });    
}

// Location protocol - Added by Louisianish
// var location;
// var url;
if (location.protocol === 'http:') {
    url = 'http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial';
} else {
    url = 'https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial';
}

// DISPLAY WEATHER TO UI
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

    // Kouri-Vini weather description translations - Added by Louisianish
    let weatherCondition = document.getElementById("kourivini");

    // Clear - 01d & 01n
    // Set weather description to display "plin soléy" ("sunny") during daytime hours rather than "syèl klær"
    if (weatherCondition.innerHTML == "clear sky" && weather.iconId == "01d")
        document.getElementById("kourivini").innerHTML = "plin soléy";
    else if (weatherCondition.innerHTML == "clear sky" && weather.iconId == "01n")
        document.getElementById("kourivini").innerHTML = "syèl klær";
    // Switch statements for translation of weather conditions
    else {
        switch(weatherCondition.innerHTML) {
            // Clouds - 02d & 02n
            case "few clouds":
                weatherCondition.innerHTML = "kèk miriyaj";
                break;
            // Clouds - 03d & 03n
            case "scattered clouds":
                weatherCondition.innerHTML = "kèk miriyaj";
                break;
            // Clouds - 04d & 04n
            case "broken clouds":
                weatherCondition.innerHTML = "kouvær";
                break;
            case "overcast clouds":
                weatherCondition.innerHTML = "kouvær";
                break;
            // Drizzle & Rain - 09d & 09n
            case "shower rain":
                weatherCondition.innerHTML = "lavalas";
                break;
            case "light intensity shower rain":
                weatherCondition.innerHTML = "ti lavalas";
                break;
            case "heavy intensity shower rain":
                weatherCondition.innerHTML = "gro lavalas";
                break;
            case "ragged shower rain":
                weatherCondition.innerHTML = "lavalas";
                break;
            case "light intensity drizzle":
                weatherCondition.innerHTML = "ti grènnas";
                break;
            case "drizzle":
                weatherCondition.innerHTML = "grènnas";
                break;
            case "heavy intensity drizzle":
                weatherCondition.innerHTML = "gro grènnas";
                break;
            case "light intensity drizzle rain":
                weatherCondition.innerHTML = "ti grènnas";
                break;       
            case "drizzle rain":
                weatherCondition.innerHTML = "grènnas";
                break;
            case "heavy intensity drizzle rain":
                weatherCondition.innerHTML = "gro grènnas";
                break;
            case "shower rain and drizzle":
                weatherCondition.innerHTML = "lavalas";
                break;
            case "heavy shower rain and drizzle":
                weatherCondition.innerHTML = "gro lavalas";
                break;
            case "shower drizzle":
                weatherCondition.innerHTML = "ti lavalas";
                break;    
            // Rain - 10d & 10n
            case "rain":
                weatherCondition.innerHTML = "lapli";
                break;
            case "light rain":
                weatherCondition.innerHTML = "ti lagrènn";
                break;
            case "moderate rain":
                weatherCondition.innerHTML = "lapli moyin";
                break;
            case "heavy intensity rain":
                weatherCondition.innerHTML = "gro lapli";
                break;            
            case "very heavy rain":
                weatherCondition.innerHTML = "gro lapli";
                break;
            case "extreme rain":
                weatherCondition.innerHTML = "gro lapli";
                break;
            // Thunderstorm - 11d & 11n
            case "thunderstorm":
                weatherCondition.innerHTML = "loragan tonnær";
                break;
            case "light thunderstorm":
                weatherCondition.innerHTML = "loragan tonnær fèb";
                break;
            case "ragged thunderstorm":
                weatherCondition.innerHTML = "loragan tonnær";
                break;
            case "heavy thunderstorm":
                weatherCondition.innerHTML = "gro loragan tonnær";
                break;            
            case "thunderstorm with rain":
                weatherCondition.innerHTML = "loragan tonnær ak lapli";
                break;
            case "thunderstorm with light rain":
                weatherCondition.innerHTML = "loragan tonnær ak ti grènn";
                break;
            case "thunderstorm with heavy rain":
                weatherCondition.innerHTML = "loragan tonnær ak gro lapli";
                break;
            case "thunderstorm with drizzle":
                weatherCondition.innerHTML = "[loragan tonnær ak grènnas";
                break;
            case "thunderstorm with light drizzle":
                weatherCondition.innerHTML = "loragan tonnær ak ti grènnas";
                break;
            case "thunderstorm with heavy drizzle":
                weatherCondition.innerHTML = "loragan tonnær ak lapli";
                break;
            // Snow - 13d & 13n
            case "snow":
                weatherCondition.innerHTML = "lanèj";
                break;
            case "freezing rain":
                weatherCondition.innerHTML = "lapli glasé";
                break;
            case "light snow":
                weatherCondition.innerHTML = "ti grènn lanèj";
                break;
            case "heavy snow":
                weatherCondition.innerHTML = "gro lanèj";
                break;            
            case "sleet":
                weatherCondition.innerHTML = "værglan";
                break;
            case "light shower sleet":
                weatherCondition.innerHTML = "værglan";
                break;
            case "shower sleet":
                weatherCondition.innerHTML = "værglan";
                break;
            case "light rain and snow":
                weatherCondition.innerHTML = "ti grènn ak lanèj";
                break;
            case "rain and snow":
                weatherCondition.innerHTML = "lapli ak lanèj";
                break;
            case "light shower snow":
                weatherCondition.innerHTML = "ti grènn lanèj";
                break;
            case "shower snow":
                weatherCondition.innerHTML = "lavalas lanèj";
                break;            
            case "heavy shower snow":
                weatherCondition.innerHTML = "gro lavalas lanèj";
                break;  
            // Atmosphere - 50d & 50n
            case "mist":
                weatherCondition.innerHTML = "brouyar";
                break;
            case "haze":
                weatherCondition.innerHTML = "brouyar";
                break;
            case "fog":
                weatherCondition.innerHTML = "brouyar";
                break;
            case "smoke":
                weatherCondition.innerHTML = "boukann";
                break;            
            case "dust":
                weatherCondition.innerHTML = "lapousyær";
                break;
            case "sand":
                weatherCondition.innerHTML = "lasab";
                break;
            case "volcanic ash":
                weatherCondition.innerHTML = "lasenn volkanik";
                break;
            case "squalls":
                weatherCondition.innerHTML = "bouras";
                break;
            case "tornado":
                weatherCondition.innerHTML = "tourbiyon";
                break;
            case "sand/dust whirls":
                weatherCondition.innerHTML = "tourbiyon";
                break;
        }
    }

    // City names in Kouri-Vini - Added by Louisianish
    let locations = {
        "Chicago, US": "Shikago, Ozilinwa",
        "Matteson, US": "Matteson, Ozilinwa",
        "Niceville, US": "Vayanvil, Laflorid",
        "Paris, FR": "Pari, Lafrans",
        "London, GB": "Lalonn, Langlotær",
        "Salt Lake City, US": "Olak-Salé, Litò",
        "Salt Lake, US": "Olak-Salé, Litò"
    }

    if (locationElement.innerHTML in locations) {
        document.getElementById("location").innerHTML = locations[locationElement.innerHTML];
    }
}

// F to C conversion - Added by Louisianish
function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * (5/9);
}
// // C to F conversion
// function celsiusToFahrenheit(temperature) {
//     return (temperature * 9/5) + 32;
// }

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENT
// when Fahrenheit is displayed upon loading - Added by Louisianish
tempElement.addEventListener("click", function() {    
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "fahrenheit") {
        let celsius = fahrenheitToCelsius(weather.temperature.value);
        celsius = Math.floor(celsius);
        
        tempElement.innerHTML = `${celsius}°<span>C</span>`;
        weather.temperature.unit = "celsius";
    } else {
        tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit"
    }
});

// // when Celsius is displayed upon loading
// tempElement.addEventListener("click", function() {
//     if(weather.temperature.value === undefined) return;
    
//     if(weather.temperature.unit == "celsius") {
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
        
//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     } else {
//         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
// });


// Search for a city - Added by Louisianish
var form = document.getElementById('search')


form.addEventListener('submit', function(event) {
  event.preventDefault()

  var searchbar = document.getElementById('searchbar').value

  console.log(searchbar);
})

// Add a function for city to be submitted upon pressing 'Enter'
document.querySelector(".button").addEventListener("click", function () {
    const city = document.getElementById("searchbar").value;
    const zip = document.getElementById("searchbar").value;
    const state = document.getElementById("searchbar").value;
    const country = document.getElementById("searchbar").value;
    let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${zip},${city},${state},${country}&appid=${key}&units=imperial`;

    console.log(apiCity);

    fetch(apiCity)
    .then(function(response) {
      let data = response.json();
      return data
      .then(function(data) {
          weather.temperature.value = Math.floor(data.main.temp);
          weather.description = data.weather[0].description;
          weather.iconId = data.weather[0].icon;
          weather.city = data.name;
          weather.country = data.sys.country;
      })
      .then(function() {
          displayWeather();
      });   
    });
});

// // Fetch city-list.js file for city and U.S. state translations
// const cities = fetch('city-list.js');

// if (cities.city.state === "FL") {
//     document.getElementById("location").innerHTML = `${city.name}, Laflorid`);
// }
