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
            return data;
        })
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
    
    // Display state if city is in U.S.
    // let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${zip},${city},${state},${country}&appid=${key}&units=imperial`;
        
    // fetch('city.list.json')
    //     .then(function(response){
    //         let data = response.json();
    //         return data;
    //     })
    //     .then(function(data) {
    //         state.code = data.state;
    //     });   
    // });

    // if (weather.country == "US") {
    //     locationElement.innerHTML = `${weather.city}, ${state}`;
    // } else {
    //     locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    // }

  // Kouri-Vini weather description translations - Added by Louisianish
  let weatherCondition = document.getElementById("kourivini").innerHTML;

  // Clear - 01d & 01n
  // Set weather description to display "plin soléy" ("sunny") during daytime hours rather than "syèl klær"
  if (weatherCondition == "clear sky" && weather.iconId == "01d")
      document.getElementById("kourivini").innerHTML = "plin soléy";
  else if (weatherCondition == "clear sky" && weather.iconId == "01n")
      document.getElementById("kourivini").innerHTML = "syèl klær";
  // Clouds - 02d & 02n
  if (weatherCondition == "few clouds")
      document.getElementById("kourivini").innerHTML = "kèk miriyaj";
  // Clouds - 03d & 03n
  else if (weatherCondition == "scattered clouds")
      document.getElementById("kourivini").innerHTML = "kèk miriyaj";
  // Clouds - 04d & 04n
  else if (weatherCondition == "broken clouds")
  document.getElementById("kourivini").innerHTML = "kouvær";
  else if (weatherCondition == "overcast clouds")
  document.getElementById("kourivini").innerHTML = "kouvær";
  // Drizzle & Rain - 09d & 09n
  else if (weatherCondition == "shower rain")
      document.getElementById("kourivini").innerHTML = "lavalas";
  else if (weatherCondition == "light intensity shower rain")
      document.getElementById("kourivini").innerHTML = "ti lavalas";
  else if (weatherCondition == "heavy intensity shower rain")
      document.getElementById("kourivini").innerHTML = "gro lavalas";
  else if (weatherCondition == "ragged shower rain")
      document.getElementById("kourivini").innerHTML = "lavalas";
  else if (weatherCondition == "light intensity drizzle")
      document.getElementById("kourivini").innerHTML = "ti grènnas";
  else if (weatherCondition == "drizzle")
      document.getElementById("kourivini").innerHTML = "grènnas";
  else if (weatherCondition == "heavy intensity drizzle")
      document.getElementById("kourivini").innerHTML = "gro grènnas";
  else if (weatherCondition == "light intensity drizzle rain")
      document.getElementById("kourivini").innerHTML = "ti grènnas";
  else if (weatherCondition == "drizzle rain")
      document.getElementById("kourivini").innerHTML = "grènnas";
  else if (weatherCondition == "heavy intensity drizzle rain")
      document.getElementById("kourivini").innerHTML = "gro grènnas";
  else if (weatherCondition == "shower rain and drizzle")
      document.getElementById("kourivini").innerHTML = "lavalas";
  else if (weatherCondition == "heavy shower rain and drizzle")
      document.getElementById("kourivini").innerHTML = "gro lavalas";
  else if (weatherCondition == "shower drizzle")
      document.getElementById("kourivini").innerHTML = "ti lavalas";
  // Rain - 10d & 10n
  else if (weatherCondition == "rain")
      document.getElementById("kourivini").innerHTML = "lapli";
  else if (weatherCondition == "light rain")
      document.getElementById("kourivini").innerHTML = "ti lagrènn";
  else if (weatherCondition == "moderate rain")
      document.getElementById("kourivini").innerHTML = "lapli moyin";
  else if (weatherCondition == "heavy intensity rain")
      document.getElementById("kourivini").innerHTML = "gro lapli";
  else if (weatherCondition == "very heavy rain")
      document.getElementById("kourivini").innerHTML = "gro lapli";
  else if (weatherCondition == "extreme rain")
      document.getElementById("kourivini").innerHTML = "gro lapli";
  // Thunderstorm - 11d & 11n
  else if (weatherCondition == "thunderstorm")
      document.getElementById("kourivini").innerHTML = "loragan tonnær";
  else if (weatherCondition == "light thunderstorm")
      document.getElementById("kourivini").innerHTML = "loragan tonnær fèb";
  else if (weatherCondition == "ragged thunderstorm")
      document.getElementById("kourivini").innerHTML = "loragan tonnær";
  else if (weatherCondition == "heavy thunderstorm")
      document.getElementById("kourivini").innerHTML = "gro loragan tonnær";
  else if (weatherCondition == "thunderstorm with rain")
      document.getElementById("kourivini").innerHTML = "loragan tonnær ak lapli";
  else if (weatherCondition == "thunderstorm with light rain")
      document.getElementById("kourivini").innerHTML = "loragan tonnær ak ti grènn";
  else if (weatherCondition == "thunderstorm with heavy rain")
      document.getElementById("kourivini").innerHTML = "loragan tonnær ak gro lapli";
  else if (weatherCondition == "thunderstorm with drizzle")
      document.getElementById("kourivini").innerHTML = "loragan tonnær ak grènnas";
  else if (weatherCondition == "thunderstorm with light drizzle")
      document.getElementById("kourivini").innerHTML = "loragan tonnær ak ti grènnas";
  else if (weatherCondition == "thunderstorm with heavy drizzle")
      document.getElementById("kourivini").innerHTML = "loragan tonnær ak lapli";
  // Snow - 13d & 13n
  else if (weatherCondition == "snow")
      document.getElementById("kourivini").innerHTML = "lanèj";
  else if (weatherCondition == "freezing rain")
      document.getElementById("kourivini").innerHTML = "lapli glasé";
  else if (weatherCondition == "light snow")
      document.getElementById("kourivini").innerHTML = "ti grènn lanèj";
  else if (weatherCondition == "heavy snow")
      document.getElementById("kourivini").innerHTML = "gro lanèj";
  else if (weatherCondition == "sleet")
      document.getElementById("kourivini").innerHTML = "værglan";
  else if (weatherCondition == "light shower sleet")
      document.getElementById("kourivini").innerHTML = "værglan";
  else if (weatherCondition == "shower sleet")
      document.getElementById("kourivini").innerHTML = "værglan";
  else if (weatherCondition == "light rain and snow")
      document.getElementById("kourivini").innerHTML = "ti grènn ak lanèj";
  else if (weatherCondition == "rain and snow")
      document.getElementById("kourivini").innerHTML = "lapli ak lanèj";
  else if (weatherCondition == "light shower snow")
      document.getElementById("kourivini").innerHTML = "ti grènn lanèj";
  else if (weatherCondition == "shower snow")
      document.getElementById("kourivini").innerHTML = "lavalas lanèj";
  else if (weatherCondition == "heavy shower snow")
      document.getElementById("kourivini").innerHTML = "gro lavalas lanèj";
  // Atmosphere - 50d & 50n
  else if (weatherCondition == "mist")
      document.getElementById("kourivini").innerHTML = "brouyar";
  else if (weatherCondition == "haze")
      document.getElementById("kourivini").innerHTML = "brouyar";
  else if (weatherCondition == "fog")
      document.getElementById("kourivini").innerHTML = "brouyar";
  else if (weatherCondition == "smoke")
      document.getElementById("kourivini").innerHTML = "boukann";
  else if (weatherCondition == "dust")
      document.getElementById("kourivini").innerHTML = "lapousyær";
  else if (weatherCondition == "sand")
      document.getElementById("kourivini").innerHTML = "lasab";
  else if (weatherCondition == "volcanic ash")
      document.getElementById("kourivini").innerHTML = "lasenn volkanik";
  else if (weatherCondition == "squalls")
      document.getElementById("kourivini").innerHTML = "bouras";
  else if (weatherCondition == "tornado")
      document.getElementById("kourivini").innerHTML = "tourbiyon";
  else if (weatherCondition == "sand/dust whirls")
      document.getElementById("kourivini").innerHTML = "tourbiyon";

    // City names in Kouri-Vini - Added by Louisianish
    // let cityKv = document.getElementById("location").innerHTML;

    if(locationElement.innerHTML == "Chicago, US")
        document.getElementById("location").innerHTML = "Shikago, Ozilinwa";
    else if(locationElement.innerHTML == "Matteson, US")
        document.getElementById("location").innerHTML = "Matteson, Ozilinwa";
    else if(locationElement.innerHTML == "Niceville, US")
        document.getElementById("location").innerHTML = "Vayanvil, Laflorid";
    else if(locationElement.innerHTML == "Paris, FR")
        document.getElementById("location").innerHTML = "Pari, Lafrans";
    else if(locationElement.innerHTML == "London, GB")
        document.getElementById("location").innerHTML = "Lalonn, Langlotær";
    else if(locationElement.innerHTML == "Salt Lake City, US")
        document.getElementById("location").innerHTML = "Olak-Salé, Litò";
    else if(locationElement.innerHTML == "Salt Lake, US")
        document.getElementById("location").innerHTML = "Olak-Salé, Litò";
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
    .then(function(response){
      let data = response.json();
      return data
      .then(function(data) {
          weather.temperature.value = Math.floor(data.main.temp);
          weather.description = data.weather[0].description;
          weather.iconId = data.weather[0].icon;
          weather.city = data.name;
          weather.country = data.sys.country;
      })
      .then(function(){
          displayWeather();
      });   
    });
});

// // Fetch city-list.js file for city and U.S. state translations
// const cities = fetch('city-list.js');

// if (cities.city.state === "FL") {
//     document.getElementById("location").innerHTML = `${city.name}, Laflorid`);
// }
