// This is a language translation template by Michael Gisclair, a.k.a. "Louisianish" for the OpenWeatherMap API. OpenWeatherMap does offer language support for many languages, but not endangered languages like Louisiana Creole. Insert your own translations for the weather descriptions in the language of your choice. See it in action HERE: https://louisianish.github.io/weatherkv/ or on my personal website HERE: https://louisianish.com/weatherkv/
// Link for OpenWeatherMap API weather descriptions: https://openweathermap.org/weather-conditions

// In HTML file, add an id attribute to the paragraph tag that lies within the div with the class entitled "temperature-description." Name the ID after your language or whatever you want.
let weatherCondition = document.getElementById("[insert ID name]");

// Clear - 01d & 01n
// Set weather description to display your language's word for "sunny" during daytime hours rather than the word for "clear sky"
if (weatherCondition.innerHTML == "clear sky" && weather.iconId == "01d")
    document.getElementById("[insert ID name]").innerHTML = "[TRANSLATION for 'sunny']";
else if (weatherCondition.innerHTML == "clear sky" && weather.iconId == "01n")
    document.getElementById("[insert ID name]").innerHTML = "[TRANSLATION for 'clear sky']";
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