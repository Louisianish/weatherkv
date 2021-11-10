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
            document.getElementById("kourivini").innerHTML = text.replace("shower rain", "lapli");
        } else if(descElement.innerHTML = "light intensity shower rain"){
            document.getElementById("kourivini").innerHTML = text.replace("light intensity shower rain", "lapli");
        } else if(descElement.innerHTML = "heavy intensity shower rain"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity shower rain", "lapli");
        } else if(descElement.innerHTML = "ragged shower rain"){
            document.getElementById("kourivini").innerHTML = text.replace("ragged shower rain", "lapli");
        } else if(descElement.innerHTML = "light intensity drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("light intensity drizzle", "lapli");
        } else if(descElement.innerHTML = "drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("drizzle", "lapli");
        } else if(descElement.innerHTML = "heavy intensity drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity drizzle", "lapli");
        } else if(descElement.innerHTML = "light intensity drizzle rain"){
            document.getElementById("kourivini").innerHTML = text.replace("light intensity drizzle rain", "lapli");
        } else if(descElement.innerHTML = "drizzle rain"){
            document.getElementById("kourivini").innerHTML = text.replace("drizzle rain", "lapli");
        } else if(descElement.innerHTML = "heavy intensity drizzle rain"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity drizzle rain", "lapli");
        } else if(descElement.innerHTML = "shower rain and drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("shower rain and drizzle", "lapli");
        } else if(descElement.innerHTML = "heavy shower rain and drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy shower rain and drizzle", "lapli");
        } else if(descElement.innerHTML = "shower drizzle"){
            document.getElementById("kourivini").innerHTML = text.replace("shower drizzle", "lapli");
        }
        // Rain - 10d & 10n
        else if(descElement.innerHTML = "rain"){
            document.getElementById("kourivini").innerHTML = text.replace("rain", "lapli");
        } else if(descElement.innerHTML = "light rain"){
            document.getElementById("kourivini").innerHTML = text.replace("light rain", "lapli dous");
        } else if(descElement.innerHTML = "moderate rain"){
            document.getElementById("kourivini").innerHTML = text.replace("moderate rain", "lapli moyin");
        } else if(descElement.innerHTML = "heavy intensity rain"){
            document.getElementById("kourivini").innerHTML = text.replace("heavy intensity rain", "lapli fòr");
        } else if(descElement.innerHTML = "very heavy rain"){
            document.getElementById("kourivini").innerHTML = text.replace("very heavy rain", "lapli fòr");
        } else if(descElement.innerHTML = "extreme rain"){
            document.getElementById("kourivini").innerHTML = text.replace("extreme rain", "lapli fòr");
        }
        // Thunderstorm - 11d & 11n
        else if(descElement.innerHTML = "thunderstorm"){
            document.getElementById("kourivini").innerHTML = text.replace("thunderstorm", "");
        }
        // Snow - 13d & 13n
        else if(descElement.innerHTML = "snow"){
            document.getElementById("kourivini").innerHTML = text.replace("snow", "lanèj");
        }
        // Atmosphere - 50d & 50n
        else if(descElement.innerHTML = "mist"){
            document.getElementById("kourivini").innerHTML = text.replace("mist", "brouyar");
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

