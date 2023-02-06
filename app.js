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
function setPosition(position){
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
    let weatherCondition = document.getElementById("kourivini").innerHTML;

    // Clear - 01d & 01n
    // Set weather description to display "plin soléy" ("sunny") during daytime hours rather than "syèl klær"
    if (weatherCondition == "clear sky" && weather.iconId == "01d")
        document.getElementById("kourivini").innerHTML = "plin soléy";
    else if (weatherCondition == "clear sky" && weather.iconId == "01n")
        document.getElementById("kourivini").innerHTML = "syèl klær";
    // Switch statements for translation of weather conditions
    switch(weatherCondition) {
        // Clouds - 02d & 02n
        case "few clouds":
            document.getElementById("kourivini").innerHTML = "kèk miriyaj";
            break;
        // Clouds - 03d & 03n
        case "scattered clouds":
            document.getElementById("kourivini").innerHTML = "kèk miriyaj";
            break;
        // Clouds - 04d & 04n
        case "broken clouds":
            document.getElementById("kourivini").innerHTML = "kouvær";
            break;
        case "overcast clouds":
            document.getElementById("kourivini").innerHTML = "kouvær";
            break;
        // Drizzle & Rain - 09d & 09n
        case "shower rain":
            document.getElementById("kourivini").innerHTML = "lavalas";
            break;
        case "light intensity shower rain":
            document.getElementById("kourivini").innerHTML = "ti lavalas";
            break;
        case "heavy intensity shower rain":
            document.getElementById("kourivini").innerHTML = "gro lavalas";
            break;
        case "ragged shower rain":
            document.getElementById("kourivini").innerHTML = "lavalas";
            break;
        case "light intensity drizzle":
            document.getElementById("kourivini").innerHTML = "ti grènnas";
            break;
        case "drizzle":
            document.getElementById("kourivini").innerHTML = "grènnas";
            break;
        case "heavy intensity drizzle":
            document.getElementById("kourivini").innerHTML = "gro grènnas";
            break;
        case "light intensity drizzle rain":
            document.getElementById("kourivini").innerHTML = "ti grènnas";
            break;       
        case "drizzle rain":
            document.getElementById("kourivini").innerHTML = "grènnas";
            break;
        case "heavy intensity drizzle rain":
            document.getElementById("kourivini").innerHTML = "gro grènnas";
            break;
        case "shower rain and drizzle":
            document.getElementById("kourivini").innerHTML = "lavalas";
            break;
        case "heavy shower rain and drizzle":
            document.getElementById("kourivini").innerHTML = "gro lavalas";
            break;
        case "shower drizzle":
            document.getElementById("kourivini").innerHTML = "ti lavalas";
            break;    
        // Rain - 10d & 10n
        case "rain":
            document.getElementById("kourivini").innerHTML = "lapli";
            break;
        case "light rain":
            document.getElementById("kourivini").innerHTML = "ti lagrènn";
            break;
        case "moderate rain":
            document.getElementById("kourivini").innerHTML = "lapli moyin";
            break;
        case "heavy intensity rain":
            document.getElementById("kourivini").innerHTML = "gro lapli";
            break;            
        case "very heavy rain":
            document.getElementById("kourivini").innerHTML = "gro lapli";
            break;
        case "extreme rain":
            document.getElementById("kourivini").innerHTML = "gro lapli";
            break;
        // Thunderstorm - 11d & 11n
        case "thunderstorm":
            document.getElementById("kourivini").innerHTML = "loragan tonnær";
            break;
        case "light thunderstorm":
            document.getElementById("kourivini").innerHTML = "loragan tonnær fèb";
            break;
        case "ragged thunderstorm":
            document.getElementById("kourivini").innerHTML = "loragan tonnær";
            break;
        case "heavy thunderstorm":
            document.getElementById("kourivini").innerHTML = "gro loragan tonnær";
            break;            
        case "thunderstorm with rain":
            document.getElementById("kourivini").innerHTML = "loragan tonnær ak lapli";
            break;
        case "thunderstorm with light rain":
            document.getElementById("kourivini").innerHTML = "loragan tonnær ak ti grènn";
            break;
        case "thunderstorm with heavy rain":
            document.getElementById("kourivini").innerHTML = "loragan tonnær ak gro lapli";
            break;
        case "thunderstorm with drizzle":
            document.getElementById("kourivini").innerHTML = "[loragan tonnær ak grènnas";
            break;
        case "thunderstorm with light drizzle":
            document.getElementById("kourivini").innerHTML = "loragan tonnær ak ti grènnas";
            break;
        case "thunderstorm with heavy drizzle":
            document.getElementById("kourivini").innerHTML = "loragan tonnær ak lapli";
            break;
        // Snow - 13d & 13n
        case "snow":
            document.getElementById("kourivini").innerHTML = "lanèj";
            break;
        case "freezing rain":
            document.getElementById("kourivini").innerHTML = "lapli glasé";
            break;
        case "light snow":
            document.getElementById("kourivini").innerHTML = "ti grènn lanèj";
            break;
        case "heavy snow":
            document.getElementById("kourivini").innerHTML = "gro lanèj";
            break;            
        case "sleet":
            document.getElementById("kourivini").innerHTML = "værglan";
            break;
        case "light shower sleet":
            document.getElementById("kourivini").innerHTML = "værglan";
            break;
        case "shower sleet":
            document.getElementById("kourivini").innerHTML = "værglan";
            break;
        case "light rain and snow":
            document.getElementById("kourivini").innerHTML = "ti grènn ak lanèj";
            break;
        case "rain and snow":
            document.getElementById("kourivini").innerHTML = "lapli ak lanèj";
            break;
        case "light shower snow":
            document.getElementById("kourivini").innerHTML = "ti grènn lanèj";
            break;
        case "shower snow":
            document.getElementById("kourivini").innerHTML = "lavalas lanèj";
            break;            
        case "heavy shower snow":
            document.getElementById("kourivini").innerHTML = "gro lavalas lanèj";
            break;  
        // Atmosphere - 50d & 50n
        case "mist":
            document.getElementById("kourivini").innerHTML = "brouyar";
            break;
        case "haze":
            document.getElementById("kourivini").innerHTML = "brouyar";
            break;
        case "fog":
            document.getElementById("kourivini").innerHTML = "brouyar";
            break;
        case "smoke":
            document.getElementById("kourivini").innerHTML = "boukann";
            break;            
        case "dust":
            document.getElementById("kourivini").innerHTML = "lapousyær";
            break;
        case "sand":
            document.getElementById("kourivini").innerHTML = "lasab";
            break;
        case "volcanic ash":
            document.getElementById("kourivini").innerHTML = "lasenn volkanik";
            break;
        case "squalls":
            document.getElementById("kourivini").innerHTML = "bouras";
            break;
        case "tornado":
            document.getElementById("kourivini").innerHTML = "tourbiyon";
            break;
        case "sand/dust whirls":
            document.getElementById("kourivini").innerHTML = "tourbiyon";
            break;
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
