// Tutorial by http://youtube.com/CodeExplained - Alterations by Louisianish
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
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
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
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`;

    console.log(api);
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });    
}

// Location protocol - Added by Louisianish
if (location.protocol === 'http:') {
    url = 'http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial';
} else {
    url = 'https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial';
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;


    // Kouri-Vini translations - Added by Louisianish
    let text = document.getElementById("kourivini").innerHTML;

    // // Working on reworking the text replacement code below, but not sure how to do it yet
    // document.getElementById("kourivini").innerHTML = {
    //     "clear sky" :  "syèl klær",
    //     "few clouds" :  "kèk miriyaj",
    //     "scattered clouds" :  "kèk miriyaj",
    //     "broken clouds" :  "kèk miriyaj",
    //     "overcast clouds" :  "kouvær",
    //     "shower rain" :  "lavalas"
    // }

    // Clear - 01d & 01n
    // Set weather description to display "plin soléy" ("sunny") during daytime hours rather than "syèl klær"
    if(text == "clear sky" && weather.iconId == "01d")
        document.getElementById("kourivini").innerHTML = text.replace(text, "plin soléy");
    else if(text == "clear sky" && weather.iconId == "01n")
        document.getElementById("kourivini").innerHTML = text.replace(text, "syèl klær");
    // Clouds - 02d & 02n
    if(text == "few clouds")
        document.getElementById("kourivini").innerHTML = text.replace(text, "kèk miriyaj");
    // Clouds - 03d & 03n
    else if(text == "scattered clouds")
        document.getElementById("kourivini").innerHTML = text.replace(text, "kèk miriyaj");
    // Clouds - 04d & 04n
    else if(text == "broken clouds")
    document.getElementById("kourivini").innerHTML = text.replace(text, "kouvær");
    else if(text == "overcast clouds")
    document.getElementById("kourivini").innerHTML = text.replace(text, "kouvær");
    // Drizzle & Rain - 09d & 09n
    else if(text == "shower rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lavalas");
    else if(text == "light intensity shower rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti lavalas");
    else if(text == "heavy intensity shower rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro lavalas");
    else if(text == "ragged shower rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lavalas");
    else if(text == "light intensity drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti grènnas");
    else if(text == "drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "grènnas");
    else if(text == "heavy intensity drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro grènnas");
    else if(text == "light intensity drizzle rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti grènnas");
    else if(text == "drizzle rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "grènnas");
    else if(text == "heavy intensity drizzle rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro grènnas");
    else if(text == "shower rain and drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lavalas");
    else if(text == "heavy shower rain and drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro lavalas");
    else if(text == "shower drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti lavalas");
    // Rain - 10d & 10n
    else if(text == "rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lapli");
    else if(text == "light rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti lagrènn");
    else if(text == "moderate rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lapli moyin");
    else if(text == "heavy intensity rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro lapli");
    else if(text == "very heavy rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro lapli");
    else if(text == "extreme rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro lapli");
    // Thunderstorm - 11d & 11n
    else if(text == "thunderstorm")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær");
    else if(text == "light thunderstorm")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær fèb");
    else if(text == "ragged thunderstorm")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær");
    else if(text == "heavy thunderstorm")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro loragan tonnær");
    else if(text == "thunderstorm with rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær ak lapli");
    else if(text == "thunderstorm with light rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær ak ti grènn");
    else if(text == "thunderstorm with heavy rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær ak gro lapli");
    else if(text == "thunderstorm with drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær ak grènnas");
    else if(text == "thunderstorm with light drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær ak ti grènnas");
    else if(text == "thunderstorm with heavy drizzle")
        document.getElementById("kourivini").innerHTML = text.replace(text, "loragan tonnær ak lapli");
    // Snow - 13d & 13n
    else if(text == "snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lanèj");
    else if(text == "freezing rain")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lapli glasé");
    else if(text == "light snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti grènn lanèj");
    else if(text == "heavy snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro lanèj");
    else if(text == "sleet")
        document.getElementById("kourivini").innerHTML = text.replace(text, "værglan");
    else if(text == "light shower sleet")
        document.getElementById("kourivini").innerHTML = text.replace(text, "værglan");
    else if(text == "shower sleet")
        document.getElementById("kourivini").innerHTML = text.replace(text, "værglan");
    else if(text == "light rain and snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti grènn ak lanèj");
    else if(text == "rain and snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lapli ak lanèj");
    else if(text == "light shower snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "ti grènn lanèj");
    else if(text == "shower snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lavalas lanèj");
    else if(text == "heavy shower snow")
        document.getElementById("kourivini").innerHTML = text.replace(text, "gro lavalas lanèj");
    // Atmosphere - 50d & 50n
    else if(text == "mist")
        document.getElementById("kourivini").innerHTML = text.replace(text, "brouyar");
    else if(text == "haze")
        document.getElementById("kourivini").innerHTML = text.replace(text, "brouyar");
    else if(text == "fog")
        document.getElementById("kourivini").innerHTML = text.replace(text, "brouyar");
    else if(text == "smoke")
        document.getElementById("kourivini").innerHTML = text.replace(text, "boukann");
    else if(text == "dust")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lapousyær");
    else if(text == "sand")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lasab");
    else if(text == "volcanic ash")
        document.getElementById("kourivini").innerHTML = text.replace(text, "lasenn volkanik");
    else if(text == "squalls")
        document.getElementById("kourivini").innerHTML = text.replace(text, "bouras");
    else if(text == "tornado")
        document.getElementById("kourivini").innerHTML = text.replace(text, "tourbiyon");
    else if(text == "sand/dust whirls")
        document.getElementById("kourivini").innerHTML = text.replace(text, "tourbiyon");

    // City names in Kouri-Vini - Added by Louisianish
    let cityKv = document.getElementById("location").innerHTML;

    if(locationElement.innerHTML == "Chicago, US")
        document.getElementById("location").innerHTML = cityKv.replace(cityKv, "Shikago, Ozilinwa");
    else if(locationElement.innerHTML == "Matteson, US")
        document.getElementById("location").innerHTML = cityKv.replace(cityKv, "Matteson, Ozilinwa");
    else if(locationElement.innerHTML == "Niceville, US")
        document.getElementById("location").innerHTML = cityKv.replace(cityKv, "Vayanvil, Laflorid");
    else if(locationElement.innerHTML == "Paris, FR")
        document.getElementById("location").innerHTML = cityKv.replace(cityKv, "Pari, Lafrans");
    else if(locationElement.innerHTML == "London, GB")
        document.getElementById("location").innerHTML = cityKv.replace(cityKv, "Lalonn, Langlotær");
    else if(locationElement.innerHTML == "Salt Lake City, US")
        document.getElementById("location").innerHTML = cityKv.replace(cityKv, "Olak-Salé, Litò");
    else if(locationElement.innerHTML == "Salt Lake, US")
        document.getElementById("location").innerHTML = cityKv.replace(cityKv, "Olak-Salé, Litò");
}

// F to C conversion - Added by Louisianish
function fahrenheitToCelsius(temperature){
    return (temperature - 32) * (5/9);
}
// // C to F conversion
// function celsiusToFahrenheit(temperature){
//     return (temperature * 9/5) + 32;
// }

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENT
// when Fahrenheit is displayed upon loading - Added by Louisianish
tempElement.addEventListener("click", function(){    
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "fahrenheit"){
        let celsius = fahrenheitToCelsius(weather.temperature.value);
        celsius = Math.floor(celsius);
        
        tempElement.innerHTML = `${celsius}°<span>C</span>`;
        weather.temperature.unit = "celsius";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit"
    }
});

// // when Celsius is displayed upon loading
// tempElement.addEventListener("click", function(){
//     if(weather.temperature.value === undefined) return;
    
//     if(weather.temperature.unit == "celsius"){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
        
//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     }else{
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
document
    .querySelector(".button")
    .addEventListener("click", function () {
        const city = (document.getElementById('searchbar').value);
        const zip = (document.getElementById('searchbar').value);
        const state = (document.getElementById('searchbar').value);
        const country = (document.getElementById('searchbar').value);
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
})
