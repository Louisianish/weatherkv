 // This is a language translation template by Michael Gisclair, a.k.a. "Louisianish" for the OpenWeatherMap API. Insert your own translations for the weather descriptions in the language of your choice. See it in action HERE: https://louisianish.github.io/weatherkv/ or on my personal website HERE: https://louisianish.com/weatherkv/
 // Link for OpenWeatherMap API weather descriptions: https://openweathermap.org/weather-conditions

 // In HTML file, add an id attribute to the paragraph tag that lies within the div with the class entitled "temperature-description." Name the ID after your language or whatever you want.
 let weatherCondition = document.getElementById("[insert ID name]").innerHTML;

 // Clear - 01d & 01n
 // Set weather description to display your language's word for "sunny" during daytime hours rather than the word for "clear sky"
 if(weatherCondition == "clear sky" && weather.iconId == "01d")
     document.getElementById("[insert ID name]").innerHTML = "[TRANSLATION for 'sunny']";
 else if(weatherCondition == "clear sky" && weather.iconId == "01n")
     document.getElementById("[insert ID name]").innerHTML = "[TRANSLATION for 'clear sky']";
 // Switch statements for translation of weather conditions
switch(weatherCondition) {
    // Clouds - 02d & 02n
    case "few clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Clouds - 03d & 03n
    case "scattered clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Clouds - 04d & 04n
    case "broken clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "overcast clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Drizzle & Rain - 09d & 09n
    case "shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light intensity shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "heavy intensity shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "ragged shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light intensity drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "heavy intensity drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light intensity drizzle rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "drizzle rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "heavy intensity drizzle rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "shower rain and drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "heavy shower rain and drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "shower drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Rain - 10d & 10n
    case "rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "moderate rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "heavy intensity rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "very heavy rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "extreme rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Thunderstorm - 11d & 11n
    case "thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "ragged thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "heavy thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "thunderstorm with rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "thunderstorm with light rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "thunderstorm with heavy rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "thunderstorm with drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "thunderstorm with light drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "thunderstorm with heavy drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Snow - 13d & 13n
    case "snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "freezing rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "heavy snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "sleet":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light shower sleet":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "shower sleet":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light rain and snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "rain and snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "light shower snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "shower snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "heavy shower snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Atmosphere - 50d & 50n
    case "mist":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "haze":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "fog":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "smoke":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "dust":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "sand":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "volcanic ash":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "squalls":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "tornado":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "sand/dust whirls":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
}