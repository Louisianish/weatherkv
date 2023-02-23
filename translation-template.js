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
else {
    switch(weatherCondition.innerHTML) {
        // Clouds - 02d & 02n
        case "few clouds":
            weatherCondition.innerHTML = "[TRANSLATION for 'few clouds']";
            break;
        // Clouds - 03d & 03n
        case "scattered clouds":
            weatherCondition.innerHTML = "[TRANSLATION for 'scattered clouds']";
            break;
        // Clouds - 04d & 04n
        case "broken clouds":
            weatherCondition.innerHTML = "[TRANSLATION for 'broken clouds']";
            break;
        case "overcast clouds":
            weatherCondition.innerHTML = "[TRANSLATION for 'overcast clouds']";
            break;
        // Drizzle & Rain - 09d & 09n
        case "shower rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'shower rain']";
            break;
        case "light intensity shower rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'light intensity shower rain']";
            break;
        case "heavy intensity shower rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy intensity shower rain']";
            break;
        case "ragged shower rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'ragged shower rain']";
            break;
        case "light intensity drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'light intensity drizzle']";
            break;            
        case "drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'drizzle']";
            break;
        case "heavy intensity drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy intensity drizzle']";
            break;
        case "light intensity drizzle rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'light intensity drizzle rain']";
            break;
        case "drizzle rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'drizzle rain']";
            break;
        case "heavy intensity drizzle rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy intensity drizzle rain']";
            break;
        case "shower rain and drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'shower rain and drizzle']";
            break;            
        case "heavy shower rain and drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy shower rain and drizzle']";
            break;
        case "shower drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'shower drizzle']";
            break;
        // Rain - 10d & 10n
        case "rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'rain']";
            break;
        case "light rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'light rain']";
            break;
        case "moderate rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'moderate rain']";
            break;
        case "heavy intensity rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy intensity rain']";
            break;            
        case "very heavy rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'very heavy rain']";
            break;
        case "extreme rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'extreme rain']";
            break;
        // Thunderstorm - 11d & 11n
        case "thunderstorm":
            weatherCondition.innerHTML = "[TRANSLATION for 'thunderstorm']";
            break;
        case "light thunderstorm":
            weatherCondition.innerHTML = "[TRANSLATION for 'light thunderstorm']";
            break;
        case "ragged thunderstorm":
            weatherCondition.innerHTML = "[TRANSLATION for 'ragged thunderstorm']";
            break;
        case "heavy thunderstorm":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy thunderstorm']";
            break;            
        case "thunderstorm with rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'thunderstorm with rain']";
            break;
        case "thunderstorm with light rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'thunderstorm with light rain']";
            break;
        case "thunderstorm with heavy rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'thunderstorm with heavy rain']";
            break;
        case "thunderstorm with drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'thunderstorm with drizzle']";
            break;
        case "thunderstorm with light drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'thunderstorm with light drizzle']";
            break;
        case "thunderstorm with heavy drizzle":
            weatherCondition.innerHTML = "[TRANSLATION for 'thunderstorm with heavy drizzle']";
            break;
        // Snow - 13d & 13n
        case "snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'snow']";
            break;
        case "freezing rain":
            weatherCondition.innerHTML = "[TRANSLATION for 'freezing rain']";
            break;
        case "light snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'light snow']";
            break;
        case "heavy snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy snow']";
            break;            
        case "sleet":
            weatherCondition.innerHTML = "[TRANSLATION for 'sleet']";
            break;
        case "light shower sleet":
            weatherCondition.innerHTML = "[TRANSLATION for 'light shower sleet']";
            break;
        case "shower sleet":
            weatherCondition.innerHTML = "[TRANSLATION for 'shower sleet']";
            break;
        case "light rain and snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'light rain and snow']";
            break;
        case "rain and snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'rain and snow']";
            break;
        case "light shower snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'light shower snow']";
            break;            
        case "shower snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'shower snow']";
            break;
        case "heavy shower snow":
            weatherCondition.innerHTML = "[TRANSLATION for 'heavy shower snow']";
            break;
        // Atmosphere - 50d & 50n
        case "mist":
            weatherCondition.innerHTML = "[TRANSLATION for 'mist']";
            break;
        case "haze":
            weatherCondition.innerHTML = "[TRANSLATION for 'haze']";
            break;
        case "fog":
            weatherCondition.innerHTML = "[TRANSLATION for 'fog']";
            break;
        case "smoke":
            weatherCondition.innerHTML = "[TRANSLATION for 'smoke']";
            break;            
        case "dust":
            weatherCondition.innerHTML = "[TRANSLATION for 'dust']";
            break;
        case "sand":
            weatherCondition.innerHTML = "[TRANSLATION for 'sand']";
            break;
        case "volcanic ash":
            weatherCondition.innerHTML = "[TRANSLATION for 'volcanic ash']";
            break;
        case "squalls":
            weatherCondition.innerHTML = "[TRANSLATION for 'squalls']";
            break;
        case "tornado":
            weatherCondition.innerHTML = "[TRANSLATION for 'tornado']";
            break;
        case "sand/dust whirls":
            weatherCondition.innerHTML = "[TRANSLATION for 'sand/dust whirls']";
            break;
    }
}