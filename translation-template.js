 // This is a language translation template by Michael Gisclair, a.k.a. "Louisianish" for the OpenWeatherMap API. Insert your own translations for the weather descriptions in the language of your choice. See it in action HERE: https://louisianish.github.io/weatherkv/ or on my personal website HERE: https://louisianish.com/weatherkv/
 // Link for OpenWeatherMap API weather descriptions: https://openweathermap.org/weather-conditions

 // In HTML file, add an id attribute to the paragraph tag that lies within the div with the class entitled "temperature-description." Name the ID after your language or whatever you want.
 let weatherCondition = document.getElementById("[insert ID name]").innerHTML;

 // Clear - 01d & 01n
 // Set weather description to display your language's word for "sunny" during daytime hours rather than the word for "clear sky"
 if(weatherCondition == "clear sky" && weather.iconId == "01d")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'sunny']";
 else if(weatherCondition == "clear sky" && weather.iconId == "01n")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'clear sky']";
 
     // Clouds - 02d & 02n
 if(weatherCondition == "few clouds")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'few clouds']";
 // Clouds - 03d & 03n
 else if(weatherCondition == "scattered clouds")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'scattered clouds']";
 // Clouds - 04d & 04n
 else if(weatherCondition == "broken clouds")
 document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'broken clouds']";
 else if(weatherCondition == "overcast clouds")
 document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'overcast clouds']";
 // Drizzle & Rain - 09d & 09n
 else if(weatherCondition == "shower rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'shower rain']";
 else if(weatherCondition == "light intensity shower rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light intensity shower rain']";
 else if(weatherCondition == "heavy intensity shower rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy intensity shower rain']";
 else if(weatherCondition == "ragged shower rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'ragged shower rain']";
 else if(weatherCondition == "light intensity drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light intensity drizzle']";
 else if(weatherCondition == "drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'drizzle']";
 else if(weatherCondition == "heavy intensity drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy intensity drizzle']";
 else if(weatherCondition == "light intensity drizzle rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light intensity drizzle rain']";
 else if(weatherCondition == "drizzle rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'drizzle rain']";
 else if(weatherCondition == "heavy intensity drizzle rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy intensity drizzle rain']";
 else if(weatherCondition == "shower rain and drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'shower rain and drizzle']";
 else if(weatherCondition == "heavy shower rain and drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy shower rain and drizzle']";
 else if(weatherCondition == "shower drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'shower drizzle']";
 // Rain - 10d & 10n
 else if(weatherCondition == "rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'rain']";
 else if(weatherCondition == "light rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light rain']";
 else if(weatherCondition == "moderate rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'moderate rain']";
 else if(weatherCondition == "heavy intensity rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy intensity rain']";
 else if(weatherCondition == "very heavy rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'very heavy rain']";
 else if(weatherCondition == "extreme rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'extreme rain']";
 // Thunderstorm - 11d & 11n
 else if(weatherCondition == "thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'thunderstorm']";
 else if(weatherCondition == "light thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light thunderstorm']";
 else if(weatherCondition == "ragged thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'ragged thunderstorm']";
 else if(weatherCondition == "heavy thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy thunderstorm']";
 else if(weatherCondition == "thunderstorm with rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'thunderstorm with rain']";
 else if(weatherCondition == "thunderstorm with light rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'thunderstorm with light rain']";
 else if(weatherCondition == "thunderstorm with heavy rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'thunderstorm with heavy rain']";
 else if(weatherCondition == "thunderstorm with drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'thunderstorm with drizzle']";
 else if(weatherCondition == "thunderstorm with light drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'thunderstorm with light drizzle']";
 else if(weatherCondition == "thunderstorm with heavy drizzle")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'thunderstorm with heavy drizzle']";
 // Snow - 13d & 13n
 else if(weatherCondition == "snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'snow']";
 else if(weatherCondition == "freezing rain")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'freezing rain']";
 else if(weatherCondition == "light snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light snow']";
 else if(weatherCondition == "heavy snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy snow']";
 else if(weatherCondition == "sleet")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'sleet']";
 else if(weatherCondition == "light shower sleet")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light shower sleet']";
 else if(weatherCondition == "shower sleet")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'shower sleet']";
 else if(weatherCondition == "light rain and snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light rain and snow']";
 else if(weatherCondition == "rain and snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'rain and snow']";
 else if(weatherCondition == "light shower snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'light shower snow']";
 else if(weatherCondition == "shower snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'shower snow']";
 else if(weatherCondition == "heavy shower snow")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'heavy shower snow']";
 // Atmosphere - 50d & 50n
 else if(weatherCondition == "mist")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'mist']";
 else if(weatherCondition == "haze")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'haze']";
 else if(weatherCondition == "fog")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'fog']";
 else if(weatherCondition == "smoke")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'smoke']";
 else if(weatherCondition == "dust")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'dust']";
 else if(weatherCondition == "sand")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'sand']";
 else if(weatherCondition == "volcanic ash")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'volcanic ash']";
 else if(weatherCondition == "squalls")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'squalls']";
 else if(weatherCondition == "tornado")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'tornado']";
 else if(weatherCondition == "sand/dust whirls")
     document.getElementById("[insert ID name]").innerHTML = "[insert translation for 'sand/dust whirls']";



// Switch statements for translation of weather conditions
switch(weatherCondition) {
    // Clouds - 02d & 02n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Clouds - 03d & 03n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Clouds - 04d & 04n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Drizzle & Rain - 09d & 09n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Rain - 10d & 10n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Thunderstorm - 11d & 11n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Snow - 13d & 13n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    // Atmosphere - 50d & 50n
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;            
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
    case "[CONDITION]":
        document.getElementById("kourivini").innerHTML = "[TRANSLATION]";
        break;
}