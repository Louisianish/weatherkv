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
if (location.protocol === "http:") {
    url =
      "http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial";
  } else {
    url =
      "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial";
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
    // Key-value pairs for translation of weather conditions
    else {
        const weatherConditions = {
            // Clouds - 02d & 02n
            "few clouds": "kèk miriyaj",
            // Clouds - 03d & 03n
            "scattered clouds": "kèk miriyaj",
            // Clouds - 04d & 04n
            "broken clouds": "kouvær",
            "overcast clouds": "kouvær",
            // Drizzle & Rain - 09d & 09n
            "shower rain": "lavalas",
            "light intensity shower rain": "ti lavalas",
            "heavy intensity shower rain": "gro lavalas",
            "ragged shower rain": "lavalas",
            "light intensity drizzle": "ti grènnas",
            "drizzle": "grènnas",
            "heavy intensity drizzle": "gro grènnas",
            "light intensity drizzle rain": "ti grènnas",
            "drizzle rain": "grènnas",
            "heavy intensity drizzle rain": "gro grènnas",
            "shower rain and drizzle": "lavalas",
            "heavy shower rain and drizzle": "gro lavalas",
            "shower drizzle": "ti lavalas",
            // Rain - 10d & 10n
            "rain": "lapli",
            "light rain": "ti lagrènn",
            "moderate rain": "lapli moyin",
            "heavy intensity rain": "gro lapli",
            "very heavy rain": "gro lapli",
            "extreme rain": "gro lapli",
            // Thunderstorm - 11d & 11n
            "thunderstorm": "loragan tonnær",
            "light thunderstorm": "loragan tonnær fèb",
            "ragged thunderstorm": "loragan tonnær",
            "heavy thunderstorm": "gro loragan tonnær",
            "thunderstorm with rain": "loragan tonnær ak lapli",
            "thunderstorm with light rain": "loragan tonnær ak ti grènn",
            "thunderstorm with heavy rain": "loragan tonnær ak gro lapli",
            "thunderstorm with drizzle": "[loragan tonnær ak grènnas",
            "thunderstorm with light drizzle": "loragan tonnær ak ti grènnas",
            "thunderstorm with heavy drizzle": "loragan tonnær ak lapli",
            // Snow - 13d & 13n
            "snow": "lanèj",
            "freezing rain": "lapli glasé",
            "light snow": "ti grènn lanèj",
            "heavy snow": "gro lanèj",
            "sleet": "værglan",
            "light shower sleet": "værglan",
            "shower sleet": "værglan",
            "light rain and snow": "ti grènn ak lanèj",
            "rain and snow": "lapli ak lanèj",
            "light shower snow": "ti grènn lanèj",
            "shower snow": "lavalas lanèj",
            "heavy shower snow": "gro lavalas lanèj",
            // Atmosphere - 50d & 50n
            "mist": "brouyar",
            "haze": "brouyar",
            "fog": "brouyar",
            "smoke": "boukann",
            "dust": "lapousyær",
            "sand": "lasab",
            "volcanic ash": "lasenn volkanik",
            "squalls": "bouras",
            "tornado": "tourbiyon",
            "sand/dust whirls": "tourbiyon"
        };
        
        weatherCondition.innerHTML = weatherConditions[weatherCondition.innerHTML];
    }

    // City names in Kouri-Vini - Added by Louisianish
    let locations = {
        "Chicago, US": "Shikago, Ozilinwa",
        "Matteson, US": "Matteson, Ozilinwa",
        "Niceville, US": "Vayanvil, Laflorid",
        "Orlando, US": "Orlando, Laflorid",
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

  var searchbar = document.getElementById('searchbar').value;

  console.log(searchbar);

  document.getElementById('searchbar').value = '';
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
