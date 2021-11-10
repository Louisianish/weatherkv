// Tutorial by http://youtube.com/CodeExplained
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
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
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
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });    
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

    // Kouri-Vini translations
    let text = document.getElementById("kourivini").innerHTML;
    
        // Clear - 01d & 01n
        if(descElement.innerHTML = "clear sky"){
            document.getElementById("kourivini").innerHTML = text.replace("clear sky", "syèl klær");
        }
        // Clouds - 02d & 02n
        else if(descElement.innerHTML = "few clouds"){
            document.getElementById("kourivini").innerHTML = text.replace("few clouds", "");
        }
        // Clouds - 03d & 03n
        else if(descElement.innerHTML = "scattered clouds"){
            document.getElementById("kourivini").innerHTML = text.replace("scattered clouds", "kèk miriyaj");
        }
        // Clouds - 04d & 04n
        else if(descElement.innerHTML = "broken clouds"){
            document.getElementById("kourivini").innerHTML = text.replace("broken clouds", "kouvær");
        } else if(descElement.innerHTML = "broken clouds"){
            document.getElementById("kourivini").innerHTML = text.replace("overcast clouds", "kouvær");
        }
        // Drizzle & Rain - 09d & 09n
        else if(descElement.innerHTML = "shower rain"){
            document.getElementById("kourivini").innerHTML = text.replace("shower rain", "lavalas");
        } else if(descElement.innerHTML = "light intensity shower rain"){
            document.getElementById("kourivini").innerHTML = text.replace("light intensity shower rain", "ti lavalas");
        } else if(descElement.innerHTML = "heavy intensity shower rain"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity shower rain", "gro lavalas");
        } else if(descElement.innerHTML = "ragged shower rain"){
            document.getElementById("kourivini").innerHTML = text.replace("ragged shower rain", "lavalas");
        } else if(descElement.innerHTML = "light intensity drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("light intensity drizzle", "ti grènnas");
        } else if(descElement.innerHTML = "drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("drizzle", "grènnas");
        } else if(descElement.innerHTML = "heavy intensity drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity drizzle", "gro grènnas");
        } else if(descElement.innerHTML = "light intensity drizzle rain"){
            document.getElementById("kourivini").innerHTML = text.replace("light intensity drizzle rain", "ti grènnas");
        } else if(descElement.innerHTML = "drizzle rain"){
            document.getElementById("kourivini").innerHTML = text.replace("drizzle rain", "grènnas");
        } else if(descElement.innerHTML = "heavy intensity drizzle rain"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity drizzle rain", "gro grènnas");
        } else if(descElement.innerHTML = "shower rain and drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("shower rain and drizzle", "lavalas");
        } else if(descElement.innerHTML = "heavy shower rain and drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy shower rain and drizzle", "gro lavalas");
        } else if(descElement.innerHTML = "shower drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("shower drizzle", "ti lavalas");
        }
        // Rain - 10d & 10n
        else if(descElement.innerHTML = "rain"){
            document.getElementById("kourivini").innerHTML = text.replace("rain", "lapli");
        } else if(descElement.innerHTML = "light rain"){
            document.getElementById("kourivini").innerHTML = text.replace("light rain", "ti lagrènn");
        } else if(descElement.innerHTML = "moderate rain"){
            document.getElementById("kourivini").innerHTML = text.replace("moderate rain", "lapli moyin");
        } else if(descElement.innerHTML = "heavy intensity rain"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity rain", "gro lapli");
        } else if(descElement.innerHTML = "very heavy rain"){
            document.getElementById("kourivini").innerHTML = text.replace("very heavy rain", "gro lapli");
        } else if(descElement.innerHTML = "extreme rain"){
            document.getElementById("kourivini").innerHTML = text.replace("extreme rain", "gro lapli");
        }
        // Thunderstorm - 11d & 11n
        else if(descElement.innerHTML = "thunderstorm"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm", "loragan tonnær");
        } else if(descElement.innerHTML = "light thunderstorm"){
            document.getElementById("kourivini").innerHTML = text.replace("light thunderstorm", "loragan tonnær fèb");
        } else if(descElement.innerHTML = "ragged thunderstorm"){
            document.getElementById("kourivini").innerHTML = text.replace("ragged thunderstorm", "loragan tonnær");
        } else if(descElement.innerHTML = "heavy thunderstorm"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy thunderstorm", "gro loragan tonnær");
        } else if(descElement.innerHTML = "thunderstorm with rain"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm with rain", "loragan tonnær ak lapli");
        } else if(descElement.innerHTML = "thunderstorm with light rain"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm with light rain", "loragan tonnær ak ti grènn");
        } else if(descElement.innerHTML = "thunderstorm with heavy rain"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm with heavy rain", "loragan tonnær ak gro lapli");
        } else if(descElement.innerHTML = "thunderstorm with drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm with drizzle", "loragan tonnær ak grènnas");
        } else if(descElement.innerHTML = "thunderstorm with light drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm with light drizzle", "loragan tonnær ak ti grènnas");
        } else if(descElement.innerHTML = "thunderstorm with heavy drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm with heavy drizzle", "loragan tonnær ak lapli");
        }
        // Snow - 13d & 13n
        else if(descElement.innerHTML = "snow"){
            document.getElementById("kourivini").innerHTML = text.replace("snow", "lanèj");
        } else if(descElement.innerHTML = "freezing rain"){
            document.getElementById("kourivini").innerHTML = text.replace("freezing rain", "lapli glasé");
        } else if(descElement.innerHTML = "light snow"){
            document.getElementById("kourivini").innerHTML = text.replace("light snow", "ti grènn lanèj");
        } else if(descElement.innerHTML = "heavy snow"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy snow", "gro lanèj");
        } else if(descElement.innerHTML = "sleet"){
            document.getElementById("kourivini").innerHTML = text.replace("sleet", "værglan");
        } else if(descElement.innerHTML = "light shower sleet"){
            document.getElementById("kourivini").innerHTML = text.replace("light shower sleet", "værglan");
        } else if(descElement.innerHTML = "shower sleet"){
            document.getElementById("kourivini").innerHTML = text.replace("shower sleet", "værglan");
        } else if(descElement.innerHTML = "light rain and snow"){
            document.getElementById("kourivini").innerHTML = text.replace("light rain and snow", "ti grènn ak lanèj");
        } else if(descElement.innerHTML = "rain and snow"){
            document.getElementById("kourivini").innerHTML = text.replace("rain and snow", "lapli ak lanèj");
        } else if(descElement.innerHTML = "light shower snow"){
            document.getElementById("kourivini").innerHTML = text.replace("light shower snow", "ti grènn lanèj");
        } else if(descElement.innerHTML = "shower snow"){
            document.getElementById("kourivini").innerHTML = text.replace("shower snow", "lavalas lanèj");
        } else if(descElement.innerHTML = "heavy shower snow"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy shower snow", "gro lavalas lanèj");
        }
        // Atmosphere - 50d & 50n
        else if(descElement.innerHTML = "mist"){
            document.getElementById("kourivini").innerHTML = text.replace("mist", "brouyar");
        } else if(descElement.innerHTML = "haze"){
            document.getElementById("kourivini").innerHTML = text.replace("haze", "brouyar");
        } else if(descElement.innerHTML = "fog"){
            document.getElementById("kourivini").innerHTML = text.replace("fog", "brouyar");
        } else if(descElement.innerHTML = "smoke"){
            document.getElementById("kourivini").innerHTML = text.replace("smoke", "boukann");
        } else if(descElement.innerHTML = "dust"){
            document.getElementById("kourivini").innerHTML = text.replace("dust", "lapousyær");
        } else if(descElement.innerHTML = "sand"){
            document.getElementById("kourivini").innerHTML = text.replace("sand", "lasab");
        } else if(descElement.innerHTML = "volcanic ash"){
            document.getElementById("kourivini").innerHTML = text.replace("volcanic ash", "lasenn volkanik");
        } else if(descElement.innerHTML = "squalls"){
            document.getElementById("kourivini").innerHTML = text.replace("squalls", "bouras");
        } else if(descElement.innerHTML = "tornado"){
            document.getElementById("kourivini").innerHTML = text.replace("tornado", "tourbiyon");
        } else if(descElement.innerHTML = "sand/dust whirls"){
            document.getElementById("kourivini").innerHTML = text.replace("sand/dust whirls", "tourbiyon");
        }
}
// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENT
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

