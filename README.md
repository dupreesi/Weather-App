# Weather-App

https://dupreesi.github.io/Weather-App/

This was a fun little project inspired by a FreeCodeCamp challenge. 

The task involved building an app that displayed the weather wherever the user happens to be in the present moment. 

I had to implement the following user stories:
 - User can view the weather in his/her current location.
 - User can toggle the temperature unit (Celsius or Fahrenheit).
 - Weather icon or background image will change depending on weather conditions.
 
I decided to take it a bit further by adding one more user story
 - Depending on the user´s weather condition (sunshine, clouds, rain, storm...) the app shows a related background video. 

Design: 
Simplicity is king or queen! 
I decided to only show the title (Weather App), Location, Weather Icon, Temperature (including toggle option) and the Weather Condition. 

Dynamics:
After looking at an example API response from Open Weather Map, I figured I’ll need to get the longitude (long) and latitude (lat) of the user to be able to serve weather information on page load.

There are of course various ways to find a user´s long/lat and one is to go via his/her IP address. 

Steps:
1) Get user IP to determine location using getJSON API request via ipinfo.io
2) Use JS split method to create new array with 2 parameters user long+lat 
3) Use getJSON API request via openweathermap.org using the following parameters:
   - Imperial units ()
   - user location via long and lat (see steps 1, 2)
   - API key (valid after registration at openweathermap.org

Now as the successful API weathermap request gives us a bunch of information it was time to filter out the (for this app) important variables:
  - currentLocation 
  - currentWeather (description) 
  - currentTemp
  - icon (also available via openweathermap.org)

Now all the necessary information could be accessed and the a temperature conversion from celsius to fahrenheit and vice versa was set up: 

The converter function takes in 2 elements: number and celcius, uses Math.round((fTemp - 32) * (5/9)).

The last step was to select the "right background video depending on the current weather conditon. 
As each weather condition has its unique weather ID, I set up a function that relates the ID to the background video.

Happy Coding! 
