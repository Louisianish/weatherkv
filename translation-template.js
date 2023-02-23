 // This is a language translation template by Michael Gisclair, a.k.a. "Louisianish" for the OpenWeatherMap API. Insert your own translations for the weather descriptions in the language of your choice. See it in action HERE: https://louisianish.github.io/weatherkv/ or on my personal website HERE: https://louisianish.com/weatherkv/
 // Link for OpenWeatherMap API weather descriptions: https://openweathermap.org/weather-conditions

 // In HTML file, add an id attribute to the paragraph tag that lies within the div with the class entitled "temperature-description." Name the ID after your language or whatever you want.
 let weatherCondition = document.getElementById("[insert ID name]");

 // Clear - 01d & 01n
 // Set weather description to display your language's word for "sunny" during daytime hours rather than the word for "clear sky"
 if(weatherCondition.innerHTML == "clear sky" && weather.iconId == "01d")
     document.getElementById("[insert ID name]").innerHTML = "[TRANSLATION for 'sunny']";
 else if(weatherCondition.innerHTML == "clear sky" && weather.iconId == "01n")
     document.getElementById("[insert ID name]").innerHTML = "[TRANSLATION for 'clear sky']";
 // Switch statements for translation of weather conditions
switch(weatherCondition) {
    // Clouds - 02d & 02n
    case "few clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'few clouds']";
        break;
    // Clouds - 03d & 03n
    case "scattered clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'scattered clouds']";
        break;
    // Clouds - 04d & 04n
    case "broken clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'broken clouds']";
        break;
    case "overcast clouds":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'overcast clouds']";
        break;
    // Drizzle & Rain - 09d & 09n
    case "shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'shower rain']";
        break;
    case "light intensity shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light intensity shower rain']";
        break;
    case "heavy intensity shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy intensity shower rain']";
        break;
    case "ragged shower rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'ragged shower rain']";
        break;
    case "light intensity drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light intensity drizzle']";
        break;            
    case "drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'drizzle']";
        break;
    case "heavy intensity drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy intensity drizzle']";
        break;
    case "light intensity drizzle rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light intensity drizzle rain']";
        break;
    case "drizzle rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'drizzle rain']";
        break;
    case "heavy intensity drizzle rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy intensity drizzle rain']";
        break;
    case "shower rain and drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'shower rain and drizzle']";
        break;            
    case "heavy shower rain and drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy shower rain and drizzle']";
        break;
    case "shower drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'shower drizzle']";
        break;
    // Rain - 10d & 10n
    case "rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'rain']";
        break;
    case "light rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light rain']";
        break;
    case "moderate rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'moderate rain']";
        break;
    case "heavy intensity rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy intensity rain']";
        break;            
    case "very heavy rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'very heavy rain']";
        break;
    case "extreme rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'extreme rain']";
        break;
    // Thunderstorm - 11d & 11n
    case "thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'thunderstorm']";
        break;
    case "light thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light thunderstorm']";
        break;
    case "ragged thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'ragged thunderstorm']";
        break;
    case "heavy thunderstorm":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy thunderstorm']";
        break;            
    case "thunderstorm with rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'thunderstorm with rain']";
        break;
    case "thunderstorm with light rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'thunderstorm with light rain']";
        break;
    case "thunderstorm with heavy rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'thunderstorm with heavy rain']";
        break;
    case "thunderstorm with drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'thunderstorm with drizzle']";
        break;
    case "thunderstorm with light drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'thunderstorm with light drizzle']";
        break;
    case "thunderstorm with heavy drizzle":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'thunderstorm with heavy drizzle']";
        break;
    // Snow - 13d & 13n
    case "snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'snow']";
        break;
    case "freezing rain":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'freezing rain']";
        break;
    case "light snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light snow']";
        break;
    case "heavy snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy snow']";
        break;            
    case "sleet":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'sleet']";
        break;
    case "light shower sleet":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light shower sleet']";
        break;
    case "shower sleet":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'shower sleet']";
        break;
    case "light rain and snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light rain and snow']";
        break;
    case "rain and snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'rain and snow']";
        break;
    case "light shower snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'light shower snow']";
        break;            
    case "shower snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'shower snow']";
        break;
    case "heavy shower snow":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'heavy shower snow']";
        break;
    // Atmosphere - 50d & 50n
    case "mist":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'mist']";
        break;
    case "haze":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'haze']";
        break;
    case "fog":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'fog']";
        break;
    case "smoke":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'smoke']";
        break;            
    case "dust":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'dust']";
        break;
    case "sand":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'sand']";
        break;
    case "volcanic ash":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'volcanic ash']";
        break;
    case "squalls":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'squalls']";
        break;
    case "tornado":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'tornado']";
        break;
    case "sand/dust whirls":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION for 'sand/dust whirls']";
        break;
}