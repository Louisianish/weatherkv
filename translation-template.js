 // This is a language translation template by Michael Gisclair, a.k.a. "Louisianish" for the OpenWeatherMap API. Insert your own translations for the weather descriptions in the language of your choice.
 // Link for OpenWeatherMap API weather descriptions: https://openweathermap.org/weather-conditions
 
 // In HTML file, add an id attribute to the paragraph tag that lies within the div with the class entitled "temperature-description." Name the ID after your language or whatever you want.
 let text = document.getElementById("[insert ID name]").innerHTML;

 // Clear - 01d & 01n
 // Set weather description to display your language's word for "sunny" during daytime hours rather than the word for "clear sky"
 if(text == "clear sky" && weather.iconId == "01d")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'sunny']");
 else if(text == "clear sky" && weather.iconId == "01n")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'clear sky']");
 // Clouds - 02d & 02n
 if(text == "few clouds")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'few clouds']");
 // Clouds - 03d & 03n
 else if(text == "scattered clouds")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'scattered clouds']");
 // Clouds - 04d & 04n
 else if(text == "broken clouds")
 document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'broken clouds']");
 else if(text == "overcast clouds")
 document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'overcast clouds']");
 // Drizzle & Rain - 09d & 09n
 else if(text == "shower rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'shower rain']");
 else if(text == "light intensity shower rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light intensity shower rain']");
 else if(text == "heavy intensity shower rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy intensity shower rain']");
 else if(text == "ragged shower rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'ragged shower rain']");
 else if(text == "light intensity drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light intensity drizzle']");
 else if(text == "drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'drizzle']");
 else if(text == "heavy intensity drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy intensity drizzle']");
 else if(text == "light intensity drizzle rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light intensity drizzle rain']");
 else if(text == "drizzle rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'drizzle rain']");
 else if(text == "heavy intensity drizzle rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy intensity drizzle rain']");
 else if(text == "shower rain and drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'shower rain and drizzle']");
 else if(text == "heavy shower rain and drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy shower rain and drizzle']");
 else if(text == "shower drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'shower drizzle']");
 // Rain - 10d & 10n
 else if(text == "rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'rain']");
 else if(text == "light rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light rain']");
 else if(text == "moderate rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'moderate rain']");
 else if(text == "heavy intensity rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy intensity rain']");
 else if(text == "very heavy rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'very heavy rain']");
 else if(text == "extreme rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'extreme rain']");
 // Thunderstorm - 11d & 11n
 else if(text == "thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'thunderstorm']");
 else if(text == "light thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light thunderstorm']");
 else if(text == "ragged thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'ragged thunderstorm']");
 else if(text == "heavy thunderstorm")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy thunderstorm']");
 else if(text == "thunderstorm with rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'thunderstorm with rain']");
 else if(text == "thunderstorm with light rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'thunderstorm with light rain']");
 else if(text == "thunderstorm with heavy rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'thunderstorm with heavy rain']");
 else if(text == "thunderstorm with drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'thunderstorm with drizzle']");
 else if(text == "thunderstorm with light drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'thunderstorm with light drizzle']");
 else if(text == "thunderstorm with heavy drizzle")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'thunderstorm with heavy drizzle']");
 // Snow - 13d & 13n
 else if(text == "snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'snow']");
 else if(text == "freezing rain")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'freezing rain']");
 else if(text == "light snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light snow']");
 else if(text == "heavy snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy snow']");
 else if(text == "sleet")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'sleet']");
 else if(text == "light shower sleet")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light shower sleet']");
 else if(text == "shower sleet")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'shower sleet']");
 else if(text == "light rain and snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light rain and snow']");
 else if(text == "rain and snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'rain and snow']");
 else if(text == "light shower snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'light shower snow']");
 else if(text == "shower snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'shower snow']");
 else if(text == "heavy shower snow")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'heavy shower snow']");
 // Atmosphere - 50d & 50n
 else if(text == "mist")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'mist']");
 else if(text == "haze")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'haze']");
 else if(text == "fog")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'fog']");
 else if(text == "smoke")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'smoke']");
 else if(text == "dust")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'dust']");
 else if(text == "sand")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'sand']");
 else if(text == "volcanic ash")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'volcanic ash']");
 else if(text == "squalls")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'squalls']");
 else if(text == "tornado")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'tornado']");
 else if(text == "sand/dust whirls")
     document.getElementById("[insert ID name]").innerHTML = text.replace(text, "[insert translation for 'sand/dust whirls']");