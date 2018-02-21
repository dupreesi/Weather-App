//keep API key extra for easy manipulation if needed
var API_KEY = "e15a7f3fd3259dcf51aadaef984af2ba";
var cel = false;
//globally declare weather data to access it no matter what function the user is in
var wd;

//create converter function taking 2 elements: number, celcius
function displayTemp(fTemp, c){
  if (c == true) {
    return Math.round((fTemp - 32) * (5/9)) + " C";
  } else {
    return Math.round(fTemp) + " F";
  }
};

//set up helper function to manipulate elements by clicking F/C toggle without re-calling the API request every time
function render (wd, cel) {
  var currentLocation = wd.name;
  var currentWeather = wd.weather[0].description;
  var currentTemp = displayTemp(wd.main.temp, cel);
  var icon = wd.weather[0].icon;

  $("#location").html(currentLocation);
  $("#temperature").html(currentTemp);
  $("#condition").html(currentWeather);
  var iconSrc = 'http://openweathermap.org/img/w/' + icon + '.png';
  $("#location").prepend('<img src="' + iconSrc + '">');

// Set up video selection based on weather weatherCode

  var weatherCode = wd.weather[0].id.toString();
  console.log(weatherCode);

  var videos = {
        800: "sunshine.mp4",
        801: "sunshine.mp4",
        802: "sunshine.mp4",
        803: "sunshine.mp4",
        804: "sunshine.mp4",
        904: "sunshine.mp4",
        951: "sunshine.mp4",
        952: "sunshine.mp4",
        953: "sunshine.mp4",
        954: "sunshine.mp4",
        200: "greyClouds.mp4",
        201: "greyClouds.mp4",
        202: "greyClouds.mp4",
        210: "greyClouds.mp4",
        211: "greyClouds.mp4",
        212: "greyClouds.mp4",
        221: "greyClouds.mp4",
        230: "greyClouds.mp4",
        231: "greyClouds.mp4",
        232: "greyClouds.mp4",
        905: "greyClouds.mp4",
        300: "rain.mp4",
        301: "rain.mp4",
        302: "rain.mp4",
        310: "rain.mp4",
        311: "rain.mp4",
        312: "rain.mp4",
        313: "rain.mp4",
        314: "rain.mp4",
        321: "rain.mp4",
        500: "rain.mp4",
        501: "rain.mp4",
        502: "rain.mp4",
        503: "rain.mp4",
        504: "rain.mp4",
        511: "rain.mp4",
        520: "rain.mp4",
        521: "rain.mp4",
        522: "rain.mp4",
        531: "rain.mp4",
        600: "snow.mp4",
        601: "snow.mp4",
        602: "snow.mp4",
        611: "snow.mp4",
        612: "snow.mp4",
        615: "snow.mp4",
        616: "snow.mp4",
        620: "snow.mp4",
        621: "snow.mp4",
        622: "snow.mp4",
        903: "snow.mp4",
        906: "snow.mp4",
        701: "fog.mp4",
        711: "fog.mp4",
        721: "fog.mp4",
        731: "fog.mp4",
        741: "fog.mp4",
        751: "fog.mp4",
        761: "fog.mp4",
        762: "fog.mp4",
        771: "fog.mp4",
        781: "fog.mp4",
        900: "wind.mp4",
        901: "wind.mp4",
        902: "wind.mp4",
        905: "wind.mp4",
        956: "wind.mp4",
        957: "wind.mp4",
        958: "wind.mp4",
        959: "wind.mp4",
        960: "wind.mp4",
        961: "wind.mp4",
        962: "wind.mp4",
    };

$("#myVideo").attr("src",videos[weatherCode]);

}

$(function (){
  var loc;
// get user ip to determine location
  $.getJSON("http://ipinfo.io", function(d){
    console.log(d);
    //crete new array with 2 parameters long+lat to put into GetJSON
    loc = d.loc.split(",");
    console.log(loc);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?units=imperial&lat="
              + loc[0] + "&lon=" + loc[1] +"&APPID=" + API_KEY,
    function(apiData){
      //wd = weather data
      // wd.weather[0] to access inner object, description to access "fewer clouds"etc
       var wd = apiData;
console.log(wd);
       render (wd, cel);

       $("#toggle").click(function(){
         cel =! cel;
         render (wd, cel);
       });
    })
  })
})
