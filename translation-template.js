// This is a language translation template by Michael Gisclair, a.k.a. "Louisianish" for the OpenWeatherMap API. Insert your own translations for the weather descriptions in the language of your choice. See it in action HERE: https://louisianish.github.io/weatherkv/ or on my personal website HERE: https://louisianish.com/weatherkv/
// Link for OpenWeatherMap API weather descriptions: https://openweathermap.org/weather-conditions

// In HTML file, add an id attribute to the paragraph tag that lies within the div with the class entitled "temperature-description." Name the ID after your language or whatever you want.
let weatherCondition = document.getElementById("[insert ID name]");

// Clear - 01d & 01n
// Set weather description to display your language's word for "sunny" during daytime hours rather than the word for "clear sky"
if (weatherCondition.innerHTML == "clear sky" && weather.iconId == "01d")
    document.getElementById("[insert ID name]").innerHTML = "[TRANSLATION for 'sunny']";
else if (weatherCondition.innerHTML == "clear sky" && weather.iconId == "01n")
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

// Key-value pairs for translation of weather conditions
else {
    const weatherConditions = {
        // Clouds - 02d & 02n
        "few clouds": "[TRANSLATION for 'few clouds']",
        // Clouds - 03d & 03n
        "scattered clouds": "[TRANSLATION for 'scattered clouds']",
        // Clouds - 04d & 04n
        "broken clouds": "[TRANSLATION for 'broken clouds']",
        "overcast clouds": "[TRANSLATION for 'overcast clouds']",
        // Drizzle & Rain - 09d & 09n
        "shower rain": "[TRANSLATION for 'shower rain']",
        "light intensity shower rain": "[TRANSLATION for 'light intensity shower rain']",
        "heavy intensity shower rain": "[TRANSLATION for 'heavy intensity shower rain']",
        "ragged shower rain": "[TRANSLATION for 'ragged shower rain']",
        "light intensity drizzle": "[TRANSLATION for 'light intensity drizzle']",
        "drizzle": "[TRANSLATION for 'drizzle']",
        "heavy intensity drizzle": "[TRANSLATION for 'heavy intensity drizzle']",
        "light intensity drizzle rain": "[TRANSLATION for 'light intensity drizzle rain']",
        "drizzle rain": "[TRANSLATION for 'drizzle rain']",
        "heavy intensity drizzle rain": "[TRANSLATION for 'heavy intensity drizzle rain']",
        "shower rain and drizzle": "[TRANSLATION for 'shower rain and drizzle']",
        "heavy shower rain and drizzle": "[TRANSLATION for 'heavy shower rain and drizzle']",
        "shower drizzle": "[TRANSLATION for 'shower drizzle']",
        // Rain - 10d & 10n
        "rain": "[TRANSLATION for 'rain']",
        "light rain": "[TRANSLATION for 'light rain']",
        "moderate rain": "[TRANSLATION for 'moderate rain']",
        "heavy intensity rain": "[TRANSLATION for 'heavy intensity rain']",
        "very heavy rain": "[TRANSLATION for 'very heavy rain']",
        "extreme rain": "[TRANSLATION for 'extreme rain']",
        // Thunderstorm - 11d & 11n
        "thunderstorm": "[TRANSLATION for 'thunderstorm']",
        "light thunderstorm": "[TRANSLATION for 'light thunderstorm']",
        "ragged thunderstorm": "[TRANSLATION for 'ragged thunderstorm']",
        "heavy thunderstorm": "[TRANSLATION for 'heavy thunderstorm']",
        "thunderstorm with rain": "[TRANSLATION for 'thunderstorm with rain']",
        "thunderstorm with light rain": "[TRANSLATION for 'thunderstorm with light rain']",
        "thunderstorm with heavy rain": "[TRANSLATION for 'thunderstorm with heavy rain']",
        "thunderstorm with drizzle": "[TRANSLATION for 'thunderstorm with drizzle']",
        "thunderstorm with light drizzle": "[TRANSLATION for 'thunderstorm with light drizzle']",
        "thunderstorm with heavy drizzle": "[TRANSLATION for 'thunderstorm with heavy drizzle']",
        // Snow - 13d & 13n
        "snow": "[TRANSLATION for 'snow']",
        "freezing rain": "[TRANSLATION for 'freezing rain']",
        "light snow": "[TRANSLATION for 'light snow']",
        "heavy snow": "[TRANSLATION for 'heavy snow']",
        "sleet": "[TRANSLATION for 'sleet']",
        "light shower sleet": "[TRANSLATION for 'light shower sleet']",
        "shower sleet": "[TRANSLATION for 'shower sleet']",
        "light rain and snow": "[TRANSLATION for 'light rain and snow']",
        "rain and snow": "[TRANSLATION for 'rain and snow']",
        "light shower snow": "[TRANSLATION for 'light shower snow']",
        "shower snow": "[TRANSLATION for 'shower snow']",
        "heavy shower snow": "[TRANSLATION for 'heavy shower snow']",
        // Atmosphere - 50d & 50n
        "mist": "[TRANSLATION for 'mist']",
        "haze": "[TRANSLATION for 'haze']",
        "fog": "[TRANSLATION for 'fog']",
        "smoke": "[TRANSLATION for 'smoke']",
        "dust": "[TRANSLATION for 'dust']",
        "sand": "[TRANSLATION for 'sand']",
        "volcanic ash": "[TRANSLATION for 'volcanic ash']",
        "squalls": "[TRANSLATION for 'squalls']",
        "tornado": "[TRANSLATION for 'tornado']",
        "sand/dust whirls": "[TRANSLATION for 'sand/dust whirls']"
    };
    
    weatherCondition.innerHTML = weatherConditions[weatherCondition.innerHTML];
}